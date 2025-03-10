import mongoose from "mongoose";
import { MONGO_URI } from "../constants/env";

export default async function conectDb() {
  try {
    await mongoose.connect(MONGO_URI);
  } catch (error) {
    console.log("[DATABASE]: Error connecting to databse");
  }
}
