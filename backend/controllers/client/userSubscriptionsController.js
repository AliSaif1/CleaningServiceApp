import { db } from '../../firebase.js';
import { Timestamp } from 'firebase-admin/firestore';

class UserSubscriptionsController {
    static async purchaseSubsricptions(req, res) {
        try {
            const userId = req.user?.uid || req.body.userId; // assuming you're using Firebase Auth middleware
            const {
                plan,
                frequency,
                per_hour_price,
                startDate,
                endDate
            } = req.body;

            if (!userId || !plan || !startDate || !endDate) {
                return res.status(400).json({ error: 'Missing required fields' });
            }

            const allowedPlans = ['basic', 'premium', 'enterprise', 'custom'];
            const allowedFrequencies = ['weekly', 'monthly'];

            if (!allowedPlans.includes(plan)) {
                return res.status(400).json({ error: 'Invalid plan' });
            }

            let duration = null;
            let isBusiness = false;

            if (plan !== 'custom') {
                if (!allowedFrequencies.includes(frequency) || !per_hour_price) {
                    return res.status(400).json({ error: 'Missing frequency or price for non-custom plan' });
                }

                // Auto-set duration
                if (plan === 'basic') duration = '2 hours';
                if (plan === 'premium') duration = '4 hours';
                if (plan === 'enterprise') {
                    duration = '6 hours';
                    isBusiness = true;
                }
            }

            const subscription = {
                userId,
                plan,
                frequency: plan !== 'custom' ? frequency : null,
                per_hour_price: plan !== 'custom' ? per_hour_price : null,
                duration,
                startDate: Timestamp.fromDate(new Date(startDate)),
                endDate: Timestamp.fromDate(new Date(endDate)),
                status: 'active',
                isBusiness,
                createdAt: Timestamp.now(),
                updatedAt: Timestamp.now()
            };

            const docRef = await db.collection('subscriptions').add(subscription);
            return res.status(201).json({ message: 'Subscription purchased successfully', id: docRef.id });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Failed to purchase subscription' });
        }
    }

    static async viewSubscriptions(req, res) {
        try {
            const userId = req.user?.uid || req.params.userId;

            const snapshot = await db.collection('subscriptions')
                .where('userId', '==', userId)
                .get();

            const subscriptions = [];
            snapshot.forEach(doc => {
                subscriptions.push({ id: doc.id, ...doc.data() });
            });

            return res.status(200).json({ subscriptions });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Failed to retrieve subscriptions' });
        }
    }

    static async cancelSubscription(req, res) {
        try {
            const { subscriptionId } = req.params;

            if (!subscriptionId) {
                return res.status(400).json({ error: 'Missing subscription ID' });
            }

            await db.collection('subscriptions').doc(subscriptionId).update({
                status: 'inactive',
                updatedAt: Timestamp.now()
            });

            return res.status(200).json({ message: 'Subscription cancelled successfully' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Failed to cancel subscription' });
        }
    }

    static async updateSubscription(req, res) {
        try {
            const { subscriptionId } = req.params;
            const updateData = req.body;

            if (!subscriptionId) {
                return res.status(400).json({ error: 'Missing subscription ID' });
            }

            if (!updateData || Object.keys(updateData).length === 0) {
                return res.status(400).json({ error: 'No update data provided' });
            }

            updateData.updatedAt = Timestamp.now();

            await db.collection('subscriptions').doc(subscriptionId).update(updateData);

            return res.status(200).json({ message: 'Subscription updated successfully' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Failed to update subscription' });
        }
    }
}

export default UserSubscriptionsController;
