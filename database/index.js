import mongoose from 'mongoose';

export default async function connectDatabase() {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB successfully');
        return connection;
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
}

