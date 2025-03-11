import "dotenv/config";
import express from "express";
import { PORT } from "./constants/env";
import connectDb from "./config/db";
import morgan from "morgan";
import authRouter from "./routes/auth.route";
import { errorHandler } from "./middleware/error_handler";

const app = express();

app.use(morgan("dev"));

app.use("/auth", authRouter);

app.use(errorHandler);

app.listen(PORT, async () => {
  console.log(`[SERVER]: Running on http://localhost:${PORT}`);
  await connectDb().then(() => {
    console.log("[DATABASE]: connection successful");
  });
});
