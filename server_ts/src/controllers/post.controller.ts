import uploadToCloudinary from "../config/cloudinary";
import {
  BAD_REQUEST,
  NOT_FOUND,
  OK,
  UNPROCESSABLE_CONTENT,
} from "../constants/http";
import Category from "../models/category.model";
import Comment from "../models/comment.model";
import Post from "../models/post.model";
import User from "../models/user.model";
import appAssert from "../utils/assert";
import { asyncHandler } from "../utils/async-handler";
import { createPostSchema } from "../utils/auth.schema";

export const createPost = asyncHandler(async (req, res) => {
  const request = createPostSchema.parse({
    ...req.body,
  });

  const cloudinaryOptions = {
    use_filename: true,
    resource_type: "image",
    unique_filename: false,
    overwrite: true,
  };
  // Upload to cloudinary
  const imageURL = await uploadToCloudinary(req, res, cloudinaryOptions);
  const category = await Category.find({ name: request.category }).exec();
  appAssert(category.length > 0, NOT_FOUND, "Invalid category");

  const post = await Post.create({
    content: request.content,
    title: request.title,
    author: req.userId,
    image: imageURL,
  });
  post.category = [
    ...new Set([...post.category, ...(category.map((each) => each._id) || [])]),
  ];
  await post.save();

  res.status(OK).json({ message: "Post created successfully" });
});

export const getPost = asyncHandler(async (req, res) => {
  const { postId } = req.params;

  const post = await Post.findOne({ postId: postId });
  appAssert(post, NOT_FOUND, "Post not found");

  res.status(OK).json({
    post,
  });
});

export const deletePost = asyncHandler(async (req, res) => {
  const { postId } = req.params;

  const post = await Post.findOne({ postId: postId });
  appAssert(post, NOT_FOUND, "Post not found");

  const deletedpost = await Promise.all([
    Post.findOneAndDelete({ postId: postId }),
    Comment.findByIdAndDelete({ post: post._id }),
  ]);
  appAssert(deletedpost, BAD_REQUEST, "Error deleting post");

  res.status(OK).json({
    message: "Post deleted",
  });
});
