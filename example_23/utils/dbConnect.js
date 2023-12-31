import mongoose from 'mongoose';
const MONGODB_URI = 'mongodb://localhost:27017/hafeez_db';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};
export default connectDB;
