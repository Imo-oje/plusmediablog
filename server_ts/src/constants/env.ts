const getEnv = (
  key: string | number,
  defaultValue?: string | number
): string | number => {
  const value = process.env[key] || defaultValue;

  if (value === undefined)
    throw new Error(`Missing environment variable ${key}`);

  return value;
};

export const MONGO_URI = getEnv("MONGO_URI") as string;
export const PORT = getEnv("PORT") as number;
export const NODE_ENV = getEnv("NODE_ENV");
export const APP_ORIGIN = getEnv("APP_ORIGIN");
export const JWT_SECRET = getEnv("JWT_SECRET") as string;
export const CLOUDINARY_API_KEY = getEnv("CLOUDINARY_API_KEY") as string;
export const CLOUDINARY_API_SECRET = getEnv("CLOUDINARY_API_SECRET") as string;
export const CLOUDINARY_CLOUD_NAME = getEnv("CLOUDINARY_CLOUD_NAME") as string;
