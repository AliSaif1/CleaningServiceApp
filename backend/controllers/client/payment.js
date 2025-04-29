import Stripe from 'stripe';
import { db } from '../firebase.js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

class PaymentController {
  // One-time advance booking payment
  static async createPaymentIntent(req, res) {
    try {
      const { amount, userId, bookingId } = req.body;

      if (!amount || !userId || !bookingId) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      const paymentIntent = await stripe.paymentIntents.create({
        amount, // in cents (e.g., 2000 = $20)
        currency: 'cad',
        metadata: { userId, bookingId },
      });

      // Store payment intent details in Firestore
      const paymentRef = db.collection('payments').doc(paymentIntent.id);
      await paymentRef.set({
        userId,
        bookingId,
        amount,
        paymentStatus: 'pending',
        paymentIntentId: paymentIntent.id,
        createdAt: new Date(),
      });

      return res.status(200).json({ clientSecret: paymentIntent.client_secret });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to create payment intent' });
    }
  }

  // Recurring subscription
  static async createSubscription(req, res) {
    try {
      const { userId, email, priceId } = req.body;

      if (!userId || !email || !priceId) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      const customer = await stripe.customers.create({
        email,
        metadata: { userId },
      });

      const subscription = await stripe.subscriptions.create({
        customer: customer.id,
        items: [{ price: priceId }],
        payment_behavior: 'default_incomplete',
        expand: ['latest_invoice.payment_intent'],
      });

      // Store subscription details in Firestore
      const subscriptionRef = db.collection('subscriptions').doc(subscription.id);
      await subscriptionRef.set({
        userId,
        customerId: customer.id,
        priceId,
        subscriptionStatus: 'pending',
        subscriptionId: subscription.id,
        createdAt: new Date(),
      });

      const clientSecret = subscription.latest_invoice.payment_intent.client_secret;

      return res.status(200).json({ clientSecret, subscriptionId: subscription.id });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to create subscription' });
    }
  }

  // Webhook handler for Stripe events
  static async handleStripeWebhook(req, res) {
    const sig = req.headers['stripe-signature'];
    let event;

    try {
      event = stripe.webhooks.constructEvent(req.rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET);
    } catch (err) {
      console.error('Webhook Error:', err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    switch (event.type) {
      case 'payment_intent.succeeded': {
        const paymentIntent = event.data.object;
        console.log('Booking payment succeeded for bookingId:', paymentIntent.metadata.bookingId);

        // Store payment details in Firestore
        const bookingRef = db.collection('bookings').doc(paymentIntent.metadata.bookingId);
        await bookingRef.update({
          paymentStatus: 'succeeded',
          paymentIntentId: paymentIntent.id,
          amountPaid: paymentIntent.amount_received / 100, // Convert to dollars
          paymentMethod: paymentIntent.charges.data[0].payment_method_details.card.brand,
          updatedAt: new Date(),
        });

        break;
      }

      case 'invoice.payment_succeeded': {
        const invoice = event.data.object;
        console.log('Subscription payment succeeded for customer:', invoice.customer);

        // Store subscription payment details in Firestore
        const subscriptionRef = db.collection('subscriptions').doc(invoice.subscription);
        await subscriptionRef.update({
          paymentStatus: 'succeeded',
          paymentIntentId: invoice.payment_intent,
          amountPaid: invoice.amount_paid / 100, // Convert to dollars
          updatedAt: new Date(),
        });

        break;
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object;
        console.warn('Subscription payment failed for customer:', invoice.customer);

        // Update subscription payment status in Firestore
        const subscriptionRef = db.collection('subscriptions').doc(invoice.subscription);
        await subscriptionRef.update({
          paymentStatus: 'failed',
          updatedAt: new Date(),
        });

        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    res.sendStatus(200);
  }
}

export default PaymentController;
