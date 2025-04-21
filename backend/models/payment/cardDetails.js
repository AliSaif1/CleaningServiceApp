import mongoose from 'mongoose';

const cardSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  cardHolderName: { type: String, required: true },
  last4Digits: { type: String, required: true },         // Only store last 4 for reference
  brand: { type: String, enum: ['Visa', 'MasterCard', 'Amex', 'Discover', 'Other'], required: true },
  expiryMonth: { type: Number, min: 1, max: 12, required: true },
  expiryYear: { type: Number, required: true },
  cardToken: { type: String, required: true },           // Token from payment gateway
  isDefault: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('cardDetails', cardSchema);
