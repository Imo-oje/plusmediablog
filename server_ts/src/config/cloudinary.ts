import { v2 as cloudinary } from "cloudinary";
import {
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  CLOUDINARY_CLOUD_NAME,
} from "../constants/env";
import { URI } from "./multer";
import { Request } from "express";

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

const uploadToCloudinary = async (req: Request, options: object) => {
  const file = URI(req).content as string;
  const result = await cloudinary.uploader.upload(file, options);
  return result.secure_url;
};

export default uploadToCloudinary;
