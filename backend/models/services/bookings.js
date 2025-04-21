import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  serviceIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'CleaningService', required: true }],  // Array of serviceIds
  bookingDate: { type: Date, required: true },
  estimatedDuration: { type: String, required: true },
  status: { type: String, enum: ['pending', 'confirmed', 'completed', 'cancelled'], default: 'pending' },
  address: { type: String, required: true },
  contactNumber: { type: String, required: true },
  totalPrice: { type: Number, required: true },
  specialInstructions: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Booking', bookingSchema);
