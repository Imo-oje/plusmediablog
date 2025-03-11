import User from "../models/user.model";

export const createAccount = async (data: {
  email: string;
  password: string;
  confirmPassword: string;
}) => {
  const existingUser = await User.exists({ email: data.email });
};
