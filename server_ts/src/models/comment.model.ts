import mongoose, { Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";

export interface CommentDocument extends Document {
  commentId: string;
  content: string;
  replies: String;
  post: Schema.Types.ObjectId[];
  author: Schema.Types.ObjectId[];
  parentComment: Schema.Types.ObjectId[];
}

const commentSchema = new Schema<CommentDocument>(
  {
    commentId: { type: String, required: true, default: uuidv4, unique: true },
    post: { type: [Schema.Types.ObjectId], ref: "Post", required: true },
    author: {
      type: [Schema.Types.ObjectId],
      required: true,
      ref: "User",
      unique: true,
    },
    content: { type: String, required: true },
    parentComment: {
      type: [Schema.Types.ObjectId],
      ref: "Comment",
      default: null,
    },
    replies: { type: [Schema.Types.ObjectId], ref: "Comment", required: true },
  },
  { timestamps: true }
);

const Comment = mongoose.model<CommentDocument>("Comment", commentSchema);

export default Comment;
