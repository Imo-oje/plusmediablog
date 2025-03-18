import { v2 as cloudinary } from "cloudinary";
import {
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  CLOUDINARY_CLOUD_NAME,
} from "../constants/env";
import { Request, Response } from "express";
import { UNPROCESSABLE_CONTENT } from "../constants/http";

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

const uploadToCloudinary = async (
  req: Request,
  res: Response,
  options: object
) => {
  try {
    if (!req.file) {
      throw new Error("No file uploaded");
    }

    const file = `data:${req.file.mimetype};base64,${req.file.buffer.toString(
      "base64"
    )}`;

    const result = await cloudinary.uploader.upload(file, options);
    return result.secure_url;
  } catch (error) {
    res.status(UNPROCESSABLE_CONTENT).json({
      message: "Failed to upload image, please try again",
    });
  }
};

export default uploadToCloudinary;
