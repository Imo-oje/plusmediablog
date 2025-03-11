import multer from "multer";
import DatauriParser from "datauri/parser";
import path from "path";
import { Request } from "express";

const storage = multer.memoryStorage();
const uploads = multer({ storage });

const buffer = new DatauriParser();
const URI = (req: Request) => {
  return buffer.format(
    path.extname(req.file?.originalname as string).toString(),
    req.file?.buffer as Buffer
  );
};

export { uploads, URI };
