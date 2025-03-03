import assert from "node:assert";
import { pbkdf2Sync, randomBytes } from "crypto";

export const asyncHandler = (controller) => {
  return async (req, res, next) => {
    try {
      await controller(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

export class AppError extends Error {
  constructor(statusCode, message, errorCode) {
    super(message);
    this.statusCode = statusCode;
    this.errorCode = errorCode;
  }
}

export const appAssert = (
  condition,
  statusCode,
  message,
  errorCode = "UNKNOWN_ERROR"
) => assert(condition, new AppError(statusCode, message, errorCode));

export const hashPassword = async (password) => {
  const salt = randomBytes(10).toString("hex");
  const hashedPassword = pbkdf2Sync(
    password,
    salt,
    10000,
    64,
    "sha512"
  ).toString("hex");

  return { hashedPassword, salt };
};

export const verifyPassword = (password, hashedPassword, salt) => {
  const newHash = pbkdf2Sync(password, salt, 10000, 64, "sha512");
  return newHash === hashedPassword;
};
