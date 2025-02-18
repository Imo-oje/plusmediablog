const getEnv = (key, defaultValue) => {
  const value = process.env[key] || defaultValue;
  if (!value) {
    throw new Error(`Environment variable ${key} is missing`);
  }
  return value;
};

export const PORT = getEnv("PORT");
export const MONGO_URI = getEnv("MONGO_URI");
// export const JWT_SECRET = getEnv('JWT_SECRET');
// export const JWT_COOKIE_EXPIRE = getEnv('JWT_COOKIE_EXPIRE');
// export const NODE_ENV = getEnv('NODE_ENV');
