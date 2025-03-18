import { NOT_FOUND, OK } from "../constants/http";
import Category from "../models/category.model";
import appAssert from "../utils/assert";
import { asyncHandler } from "../utils/async-handler";

export const getAllCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find().exec();

  const mappedCategories = categories.map((category) => ({
    name: category.name,
    categoryId: category.categoryId,
  }));

  res.status(OK).json(mappedCategories);
});
