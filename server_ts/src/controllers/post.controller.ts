import uploadToCloudinary from "../config/cloudinary";
import { BAD_REQUEST, NOT_FOUND, OK } from "../constants/http";
import Category from "../models/category.model";
import Comment from "../models/comment.model";
import Post from "../models/post.model";
import User from "../models/user.model";
import appAssert from "../utils/assert";
import { asyncHandler } from "../utils/async-handler";
import { createPostSchema } from "../utils/auth.schema";

export const createPost = asyncHandler(async (req, res) => {
  const user = await User.findOne({ userId: req.userId });

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
  const imageURL = await uploadToCloudinary(req, cloudinaryOptions);
  const category = await Category.find({ name: request.category });
  appAssert(category, NOT_FOUND, "Invalid category");

  const post = await Post.create({
    content: request.content,
    title: request.title,
    author: req.userId,
    image: imageURL,
  });
  post.category = [
    ...new Set([...post.category, ...(category.map((each) => each._id) || [])]),
  ];
  post.save();

  console.log(request);
  res.status(OK).json({ message: "Post created successfully" });
});

export const deletePost = asyncHandler(async (req, res) => {
  const postId = req.params.postId;

  const post = await Post.findOne({ postId: postId });
  appAssert(post, BAD_REQUEST, "Post not found");

  const deletedpost = await Promise.all([
    Post.findOneAndDelete({ postId: postId }),
    Comment.findByIdAndDelete({ post: post._id }),
  ]);
  appAssert(deletedpost, BAD_REQUEST, "Error deleting post");

  res.status(OK).json({
    message: "Post deleted",
  });
});
