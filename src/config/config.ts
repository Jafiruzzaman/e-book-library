import dotenv from "dotenv";
dotenv.config();
const _config = {
  port: process.env.PORT || 5000,
  cors_origin: process.env.CORS_ORIGIN as string,
  mongodb_uri: process.env.MONGODB_URI as string,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET as string,
  access_token_expiry: process.env.ACCESS_TOKEN_EXPIRY as string,
  refresh_token_secret: process.env.REFRESH_TOKEN_SECRET as string,
  refresh_token_expiry: process.env.REFRESH_TOKEN_EXPIRY as string,
  cloudinary_cloud_name: process.env.CLOUDINARY_CLOUD_NAME as string,
  cloudinary_cloud_api_key: process.env.CLOUDINARY_CLOUD_API_KEY as string,
  cloudinary_cloud_api_secret: process.env
    .CLOUDINARY_CLOUD_API_SECRET as string,
  node_env: process.env.NODE_ENV as string,
};
export const config = Object.freeze(_config);
