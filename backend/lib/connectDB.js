import mongoose from "mongoose";

mongoose.set("strictQuery", false);

const MONGO_URI = process.env.MONGO;

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;