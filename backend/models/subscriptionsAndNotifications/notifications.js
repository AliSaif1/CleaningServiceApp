import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
  title: { type: String, required: true },
  message: { type: String, required: true }, 
  link: { type: String, required: true },
  type: { 
    type: String, 
    enum: ['alert', 'reminder', 'info', 'warning'], 
    required: true 
  },
  status: { 
    type: String, 
    enum: ['unread', 'read'], 
    default: 'unread' 
  }, 
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Pre-save hook to update the 'updatedAt' field on document modification
notificationSchema.pre('save', function (next) {
  if (this.isModified()) {
    this.updatedAt = Date.now(); 
  }
  next();
});

export default mongoose.model('Notification', notificationSchema);
