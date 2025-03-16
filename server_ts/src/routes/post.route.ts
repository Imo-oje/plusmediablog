import { Router } from "express";
import { createPost, deletePost } from "../controllers/post.controller";
import authenticate from "../middleware/authenticate";
import { uploads } from "../config/multer";
import { editor } from "../middleware/editor";

const postRouter = Router();

postRouter.post(
  "/create-post",
  authenticate,
  editor,
  uploads.single("image"),
  createPost
);

postRouter.delete("/delete/:postId", authenticate, editor, deletePost);

export default postRouter;
