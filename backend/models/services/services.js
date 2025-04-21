import mongoose from 'mongoose';

const cleaningServiceSchema = new mongoose.Schema({
  serviceType: { type: String, enum: ['backyard', 'house', 'commercial', 'moving', 'electrical', 'plumbing'], required: true },
  description: { type: String, required: true, trim: true },
  price_per_hour: { type: Number, required: true },
  status: { type: String, default: "active" },
  duration: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('CleaningService', cleaningServiceSchema);
