import { title } from "process";
import z from "zod";

const passwordSchema = z.string().min(6).max(255);

export const loginSchema = z.object({
  email: z.string().email().min(1).max(255),
  password: passwordSchema,
});

export const registerSchema = () =>
  loginSchema
    .extend({
      confirmPassword: passwordSchema,
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords do not match",
      path: ["confirm_password"],
    });

export const createPostSchema = z.object({
  content: z.string(),
  title: z.string().min(3),
  category: z.string(),
});

export const createCategorySchema = z.object({
  name: z.string(),
});

export const createRoleSchema = z.object({
  name: z.string(),
});

export const updateUserRoleSchema = z.object({
  userEmail: z.string(),
  roleId: z.string(),
});
