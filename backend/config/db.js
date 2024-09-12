import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://sujal21102004:sujal%28MONGODB%2974017359@cluster0.2cp3c.mongodb.net/Chownow?retryWrites=true&w=majority');
        console.log("DB connected!");
    } catch (error) {
        console.error(`MongoDB Connection Error: ${error.message}`);
        process.exit(1); // Exit process with failure
    }
};
