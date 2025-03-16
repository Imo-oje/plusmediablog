import { FORBIDDEN, NOT_FOUND } from "../constants/http";
import Role from "../models/role.model";
import User from "../models/user.model";
import appAssert from "../utils/assert";
import { asyncHandler } from "../utils/async-handler";

export const admin = asyncHandler(async (req, res, next) => {
  const role = await Role.findOne({ name: "admin" });
  appAssert(role, NOT_FOUND, "Cannot access role");

  const user = await User.findOne({ userId: req.userId });
  appAssert(user, NOT_FOUND, "User not found");

  if (!user.role.includes(role._id))
    appAssert(false, FORBIDDEN, "AccessDenied");
  next();
});
