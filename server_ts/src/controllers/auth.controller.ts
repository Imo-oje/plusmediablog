import { NODE_ENV } from "../constants/env";
import { CREATED, OK } from "../constants/http";
import { createAccount, loginUser } from "../services/auth.service";
import { asyncHandler } from "../utils/async-handler";
import { loginSchema, registerSchema } from "../utils/auth.schema";
import { fiftenMinutesFromNow } from "../utils/date";

export const registerHandler = asyncHandler(async (req, res) => {
  // validate request

  const request = registerSchema().parse({
    ...req.body,
  });

  //call service
  const { user, accessToken } = await createAccount(request);

  return res
    .cookie("accessToken", accessToken, {
      sameSite: "none",
      httpOnly: true,
      secure: true,
      expires: fiftenMinutesFromNow(),
    })
    .status(CREATED)
    .json(user);
});

export const loginHandler = asyncHandler(async (req, res) => {
  // validate request

  const request = loginSchema.parse({
    ...req.body,
  });

  const { accessToken } = await loginUser(request);

  return res
    .cookie("accessToken", accessToken, {
      sameSite: "none",
      httpOnly: true,
      secure: true,
      expires: fiftenMinutesFromNow(),
    })
    .status(OK)
    .json({
      message: "Login successful",
    });
});

export const logoutHandler = asyncHandler(async (req, res) => {
  return res
    .clearCookie("accessToken", {
      httpOnly: true,
      secure: NODE_ENV === "production",
      sameSite: "none",
    })
    .status(OK)
    .json({
      message: "logout successful",
    });
});
