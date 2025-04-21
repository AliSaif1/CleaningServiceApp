import mongoose from 'mongoose';
import Joi from 'joi';

// Joi validation schema
export const userValidationSchema = Joi.object({
  name: Joi.string().trim().required(),
  email: Joi.string().email().required(),
  role: Joi.string().valid('admin', 'employee', 'customer').required(),
  password: Joi.string().min(6).required(),
  address: Joi.string()
});

// Mongoose schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  role: { type: String, enum: ['admin', 'employee', 'customer'], default: 'customer', required: true },
  password: { type: String, required: true, minlength: 6 },
  address: { type: String }
});

// Pre-save hook with Joi validation
userSchema.pre('save', async function (next) {
  try {
    const userData = {
      name: this.name,
      email: this.email,
      role: this.role,
      password: this.password,
      address: this.address
    };

    const { error } = userValidationSchema.validate(userData);
    if (error) return next(new Error(error.details[0].message));

    next();
  } catch (err) {
    next(err);
  }
});

export default mongoose.model('User', userSchema);
