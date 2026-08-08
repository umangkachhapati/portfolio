const mongoose = require('mongoose');

const connectDB = async (uri) => {
    try {
        if (!uri) {
            // Throw instead of returning so the application fails immediately and visibly
            throw new Error("MONGO_URI is not set in environment variables");
        }
        await mongoose.connect(uri);
        console.log("MongoDB Connected Successfully");
    } catch (error) {
        console.error("MongoDB Connection Error:", error.message);
        process.exit(1); // Stop the process if connection fails entirely
    }
};

module.exports = connectDB;
