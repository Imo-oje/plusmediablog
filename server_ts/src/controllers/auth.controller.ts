import { asyncHandler } from "../utils/async-handler";
import { registerSchema } from "../utils/auth.schema";

export const register = asyncHandler(async (req, res) => {
  // validate request

  const request = registerSchema().parse({
    ...req.body,
  });

  const { user, accessToken, refreshToken } = await createAccount(request);

  //call service

  //return response
});

export const login = asyncHandler(async (req, res) => {
  res.send("Hello from auth");
});
