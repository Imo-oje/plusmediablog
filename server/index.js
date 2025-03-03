import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import { PORT } from "./src/constants/env.js";
import connectDB from "./src/config/db.js";
import authRouter from "./src/routes.js/auth.route.js";
import postRouter from "./src/routes.js/post.route.js";
import { z } from "zod";
import { AppError } from "./src/utils/utils.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/auth", authRouter);
app.use("/posts", postRouter);

// Error Handler
app.use((error, req, res, next) => {
  console.log(`PATH: ${req.path}`, error);

  if (error instanceof z.ZodError) {
    // handle zod error

    const errors = error.issues.map((issue) => {
      return {
        path: issue.path.join("."),
        message: issue.message,
      };
    });

    return res.status(400).json({
      message: errors[0]?.message,
      errors,
    });
  }

  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      message: error.message,
      errorCode: error.errorCode,
    });
  }

  return res.status(500).json({ message: "Internal Server Error" });
});

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await connectDB();
});
