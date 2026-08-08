const mongoose = require('mongoose');

const connectDB = async (uri) => {
  try {
    if (!uri) {
      console.error("MONGO_URI is not set in environment variables");
      return;
    }
    await mongoose.connect(uri);
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("MongoDB Connection Error:", error.message);
  }
};

module.exports = connectDB;
