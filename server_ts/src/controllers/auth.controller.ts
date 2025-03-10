import { asyncHandler } from "../utils/async-handler";

export const login = asyncHandler(async (req, res) => {
  res.send("Hello from auth");
});
