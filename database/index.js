import mongoose from 'mongoose';

export default async function connectDatabase() {
    try {
        const connection = await mongoose.connect('mongodb://localhost:27017/SoilCheck');
        console.log('Connected to MongoDB successfully');
        return connection;
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
}

