import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  isActive: {type: Boolean, default: true}
});

const User = mongoose.model('User', userSchema, 'user');

export default User;
