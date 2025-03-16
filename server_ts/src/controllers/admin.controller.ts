import { CONFLICT, NOT_FOUND, OK } from "../constants/http";
import Role from "../models/role.model";
import User from "../models/user.model";
import appAssert from "../utils/assert";
import { asyncHandler } from "../utils/async-handler";
import {
  createCategorySchema,
  createRoleSchema,
  updateUserRoleSchema,
} from "../utils/auth.schema";
import Category from "../models/category.model";

export const createCategory = asyncHandler(async (req, res) => {
  const request = createCategorySchema.parse({
    ...req.body,
  });

  console.log("body  ", req.body);

  const categoryExists = await Category.exists({ name: request.name });
  appAssert(!categoryExists, CONFLICT, "Category already exists");

  await Category.create({
    name: request.name,
  });

  res.status(OK).json({
    message: "Category created",
  });
});

export const createRole = asyncHandler(async (req, res) => {
  const request = createRoleSchema.parse({
    ...req.body,
  });

  const roleExists = await Role.exists({ name: request.name });
  appAssert(!roleExists, CONFLICT, "Role already exists");

  await Role.create({
    name: request.name,
  });

  res.status(OK).json({
    message: "Role created",
  });
});

export const updateUserRole = asyncHandler(async (req, res) => {
  const request = updateUserRoleSchema.parse({
    ...req.body,
  });

  const user = await User.findOne({ email: request.userEmail });
  appAssert(user, NOT_FOUND, "User not found");

  const role = await Role.findOne({ roleId: request.roleId });
  appAssert(role, NOT_FOUND, "Invalid Role");

  if (user.role.includes(role._id)) {
    appAssert(false, CONFLICT, "Duplicate role assignment");
  }

  user.role.push(role._id);
  user.save();

  res.status(OK).json({
    message: "User role updated",
  });
});
