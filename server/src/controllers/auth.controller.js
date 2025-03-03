import { appAssert, asyncHandler } from "../utils/utils.js";
import User from "../models/user.model.js";
import ValidatorClass from "../services/validator.service.js";
import { CONFLICT, CREATED } from "../constants/http.js";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../constants/env.js";

const validator = new ValidatorClass();

export const registerHandler = asyncHandler(async (req, res) => {
  const validParams = validator.validateRegister({ ...req.body });

  const existingUser = await User.exists({ email: validParams.email });
  appAssert(!existingUser, CONFLICT, "User already exists");

  const user = await User.create({
    email: validParams.email,
    username: validParams.username,
    password: validParams.password,
  });

  const userId = user.userId;

  //create and send access token
  const accessToken = jwt.sign({ userId }, JWT_SECRET, { expiresIn: "1h" });

  res
    .cookie("access_token", accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      expiresIn: new Date(Date.now() + 15 * 60 * 1000), // 15 minutes from now
    })
    .status(CREATED)
    .json(user.omitSensitiveData());
});
