import { RequestHandler } from "express";
import appAssert from "../utils/assert";
import { UNAUTHORIZED } from "../constants/http";
import ErrorCode from "../constants/error_codes";
import { UserDocument } from "../models/user.model";
import jwt, { VerifyOptions } from "jsonwebtoken";
import { JWT_SECRET } from "../constants/env";

export const verifyToken = <
  TPayload extends object = {
    userId: UserDocument["userId"];
    username: UserDocument["username"];
  }
>(
  token: string,
  options?: VerifyOptions & { secret: string }
) => {
  const { secret = JWT_SECRET, ...verifyOpts } = options || {};
  try {
    const payload = jwt.verify(token, secret, {
      audience: ["user"],
      ...verifyOpts,
    }) as TPayload;

    return {
      payload,
    };
  } catch (error: any) {
    return {
      error: error.message,
    };
  }
};

const authenticate: RequestHandler = (req, res, next) => {
  const accessToken = req.cookies.accessToken as string | undefined;
  appAssert(
    accessToken,
    UNAUTHORIZED,
    "Unauthorized",
    ErrorCode.InvalidAccessToken
  );

  console.log(req.path);
  const { error, payload } = verifyToken(accessToken);
  appAssert(
    payload,
    UNAUTHORIZED,
    error === "jwt expired" ? "Token expired" : "Invalid token",
    ErrorCode.InvalidAccessToken
  );

  req.userId = payload.userId;
  next();
};
export default authenticate;
