import { db } from '../../firebase.js';
import { Timestamp } from 'firebase-admin/firestore';

class SubscriptionsController {
  static async addSubscription(req, res) {
    try {
      const {
        userId,
        plan,
        frequency,
        per_hour_price,
        startDate,
        endDate
      } = req.body;

      // Basic validation
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

      const newSub = {
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

      const docRef = await db.collection('subscriptions').add(newSub);
      return res.status(201).json({ id: docRef.id, ...newSub });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to create subscription' });
    }
  }

  static async updateSubscription(req, res) {
    try {
      const { id } = req.params;
      const updateData = req.body;
      updateData.updatedAt = Timestamp.now();

      await db.collection('subscriptions').doc(id).update(updateData);
      return res.status(200).json({ message: 'Subscription updated successfully' });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to update subscription' });
    }
  }

  static async deleteSubscription(req, res) {
    try {
      const { id } = req.params;
      await db.collection('subscriptions').doc(id).delete();
      return res.status(200).json({ message: 'Subscription deleted successfully' });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to delete subscription' });
    }
  }
}

export default SubscriptionsController;
