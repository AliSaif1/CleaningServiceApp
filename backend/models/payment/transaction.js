import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  bookingId: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking', required: false },
  subscriptionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Subscriptions', required: false },
  amount: { type: Number, required: true },
  invoiceLink: { type: String },
  paymentStatus: { type: String, enum: ['pending', 'completed', 'failed', 'refunded'], default: 'pending' },
  createdAt: { type: Date, default: Date.now },
});

// Custom validation to allow only one: bookingId or subscriptionId
transactionSchema.pre('validate', function (next) {
  if (!this.bookingId && !this.subscriptionId) {
    return next(new Error('Either bookingId or subscriptionId is required.'));
  }
  if (this.bookingId && this.subscriptionId) {
    return next(new Error('Only one of bookingId or subscriptionId should be provided.'));
  }
  next();
});

export default mongoose.model('Transaction', transactionSchema);
