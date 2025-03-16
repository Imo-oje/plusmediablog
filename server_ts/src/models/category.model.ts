import mongoose, { Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";

export interface CategoryDocument extends Document {
  categoryId: string;
  name: string;
}

if (mongoose.models.Category) {
  delete mongoose.models.Category;
}

const categorySchema = new Schema<CategoryDocument>(
  {
    categoryId: { type: String, required: true, default: uuidv4, unique: true },
    name: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

const Category = mongoose.model<CategoryDocument>("Category", categorySchema);

export default Category;
