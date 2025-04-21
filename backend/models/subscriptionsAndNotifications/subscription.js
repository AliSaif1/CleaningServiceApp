import mongoose from 'mongoose';

const subscriptionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  plan: { type: String, enum: ['basic', 'premium', 'enterprise', 'custom'], required: true },
  frequency: { type: String, enum: ['weekly', 'monthly'], required: function () { return this.plan !== 'custom'; } },
  per_hour_price: { type: Number, required: function () { return this.plan !== 'custom'; } },
  duration: { type: String, required: function () { return this.plan !== 'custom'; } }, // e.g. "2 hours"
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  status: { type: String, enum: ['active', 'inactive', 'expired'], default: 'active', required: true },
  isBusiness: { type: Boolean, default: false }, // true if enterprise, else false
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Optional: Auto-set duration based on plan
subscriptionSchema.pre('save', function (next) {
  if (this.plan === 'basic') this.duration = '2 hours';
  if (this.plan === 'premium') this.duration = '4 hours';
  if (this.plan === 'enterprise') {
    this.duration = '6 hours';
    this.isBusiness = true;
  }
  next();
});

export default mongoose.model('Subscription', subscriptionSchema);
