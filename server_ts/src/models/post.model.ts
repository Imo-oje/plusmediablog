import mongoose, { Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";
import Category from "./category.model";

export interface PostDocument extends Document {
  title: string;
  image: string;
  postId: string;
  likes: number;
  comments: Schema.Types.ObjectId[];
  author: Schema.Types.ObjectId[];
  category: Schema.Types.ObjectId[];
}

const postSchema = new Schema<PostDocument>(
  {
    postId: { type: String, required: true, unique: true, default: uuidv4 },
    title: { type: String, required: true },
    image: { type: String, required: false },
    body: { type: String, required: true },
    author: { type: [Schema.Types.ObjectId], ref: "User", required: true },
    likes: { type: Number, required: false, default: 0 },
    comments: {
      type: [Schema.Types.ObjectId],
      required: false,
      ref: "Comments",
    },
    category: {
      type: [Schema.Types.ObjectId],
      ref: "Category",
      required: true,
      default: [],
    },
  },
  { timestamps: true }
);

postSchema.pre<PostDocument>("save", async function (next) {
  if (!this.category || this.category.length === 0) {
    const defaultCategory = await Category.findOne({ name: "Uncategorized" });
    if (defaultCategory) {
      this.category = [
        defaultCategory._id.toString() as unknown as Schema.Types.ObjectId,
      ];
    }
  }
  next();
});

const Post = mongoose.model<PostDocument>("Post", postSchema);

export default Post;
