import { Router } from "express";
import {
  createCategory,
  createRole,
  updateUserRole,
} from "../controllers/admin.controller";

const adminRouter = Router();

adminRouter.post("/create-category", createCategory);
adminRouter.post("/create-role", createRole);
adminRouter.post("/update-role", updateUserRole);

export default adminRouter;
