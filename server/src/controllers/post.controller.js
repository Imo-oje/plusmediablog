import { NOT_FOUND } from "../constants/http.js";
import Post from "../models/post.model.js";
import { appAssert, asyncHandler } from "../utils/utils.js";

export const getPostHandler = asyncHandler(async (req, res) => {
  const post = await Post.find({ postId: `${req.params.postId}` });
  appAssert(!post, NOT_FOUND, "Post not found");
  console.log(post);

  res.status(200).json(post);
});
