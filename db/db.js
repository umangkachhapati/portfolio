const mongoose = require('mongoose');

const connectDB = async (uri) => {
  try {
    if (!uri) {
      throw new Error("MONGO_URI is missing from environment variables!");
    }
    await mongoose.connect(uri);
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("MongoDB Connection Error:", error.message);
  }
};

module.exports = connectDB;
