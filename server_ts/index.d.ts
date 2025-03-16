import { JwtPayload } from "jsonwebtoken";
import mongoose from "mongoose";

declare global {
  namespace Express {
    interface Request {
      userId: string;
    }
  }
}

export {};
