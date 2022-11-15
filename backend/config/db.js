const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI); // connect to database

    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline); // cyan, underline are from colors package.. not necessary
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
