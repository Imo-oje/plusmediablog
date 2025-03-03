import { Router } from "express";
import { getPostHandler } from "../controllers/post.controller.js";

const postRouter = Router();

postRouter.get("/:postId", getPostHandler);

export default postRouter;
