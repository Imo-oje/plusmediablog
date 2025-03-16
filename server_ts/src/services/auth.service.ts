import { JWT_SECRET } from "../constants/env";
import { CONFLICT, UNAUTHORIZED } from "../constants/http";
import User from "../models/user.model";
import appAssert from "../utils/assert";
import jwt from "jsonwebtoken";

export const createAccount = async (data: {
  email: string;
  password: string;
}) => {
  const existingUser = await User.exists({ email: data.email });
  appAssert(!existingUser, CONFLICT, "Email already in use");
  const username = data.email.split("@")[0];

  const user = await User.create({
    email: data.email,
    username: username,
    password: data.password,
  });

  //sign access token
  const accessToken = jwt.sign(
    { userId: user.userId, role: user.role, username: user.username },
    JWT_SECRET,
    {
      audience: ["user"],
      expiresIn: "15m",
    }
  );

  //return user and token
  return {
    user: user.omitPassword(),
    accessToken,
  };
};

export const loginUser = async (data: { password: string; email: string }) => {
  // validate user and password
  const user = await User.findOne({ email: data.email });
  appAssert(user, UNAUTHORIZED, "invalid email or password");

  const isValid = await user.comparePassword(data.password);
  appAssert(isValid, UNAUTHORIZED, "Invalid email or password");

  const accessToken = jwt.sign(
    { userId: user.userId, role: user.role, username: user.username },
    JWT_SECRET,
    {
      audience: ["user"],
      expiresIn: "15m",
    }
  );

  return {
    accessToken,
  };
};
