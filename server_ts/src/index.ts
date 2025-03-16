import "dotenv/config";
import express from "express";
import { APP_ORIGIN, PORT } from "./constants/env";
import connectDb from "./config/db";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRouter from "./routes/auth.route";
import { errorHandler } from "./middleware/error_handler";
import postRouter from "./routes/post.route";
import adminRouter from "./routes/admin.route";
import authenticate from "./middleware/authenticate";
import { admin } from "./middleware/admin";

const app = express();

const corsOptions: any = {
  origin: (origin: string, cb: Function) => {
    [APP_ORIGIN /*Specifyother origins here*/].indexOf(origin) !== -1 || !origin
      ? cb(null, true)
      : cb(new Error("Origin not allowed by cors"));
  },
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors(corsOptions));

app.use("/auth", authRouter);
app.use("/post", postRouter);
app.use("/admin", authenticate, admin, adminRouter);

app.use(errorHandler);

app.listen(PORT, async () => {
  console.log(`[SERVER]: Running on http://localhost:${PORT}`);
  await connectDb().then(() => {
    console.log("[DATABASE]: connection successful");
  });
});
