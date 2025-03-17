import { v2 as cloudinary } from "cloudinary";
import {
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  CLOUDINARY_CLOUD_NAME,
} from "../constants/env";
import { URI } from "./multer";
import { Request } from "express";
import appAssert from "../utils/assert";
import { UNPROCESSABLE_CONTENT } from "../constants/http";

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

const uploadToCloudinary = async (req: Request, options: object) => {
  try {
    const file = URI(req).content as string;
    const result = await cloudinary.uploader.upload(file, options);
    appAssert(result, UNPROCESSABLE_CONTENT, "Error uploading image");
    return result.secure_url;
  } catch (error) {
    throw new Error("Failed to upload Image");
  }
};

export default uploadToCloudinary;
