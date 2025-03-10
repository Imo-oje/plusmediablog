import "dotenv/config";
import express from "express";
import { PORT } from "./constants/env";
import connectDb from "./config/db";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello world!\n");
});

app.listen(PORT, async () => {
  console.log(`[SERVER]: Running on http://localhost:${PORT}`);
  await connectDb().then(() => {
    console.log("[DATABASE]: connection successful");
  });
});
