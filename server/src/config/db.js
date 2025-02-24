import mongoose from "mongoose";
import { MONGO_URI } from "../constants/env.js";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);

    console.log("MongoDB connected");
  } catch (error) {
    console.error(`Could not connect to database: ${error}`);
    process.exit(1);
  }
};

export default connectDB;
