import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import { verify } from "jsonwebtoken";
import { config } from "../config/config";
import userModel from "../model/user.model";
const verifyJWT = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token =
      req.header("Authorization")?.replace("bearer ", "") ||
      req.cookies.accessToken;
    if (!token) {
      createHttpError(401, "Unauthorized request");
    }
    const decodedToken = verify(token, config.access_token_secret);
    console.log("decodedToken", decodedToken);
    // @ts-ignore
    const user = await userModel.findById(decodedToken?._id).select("-password -refreshToken")
    if (!user) {
      createHttpError(401,"Invalid access Token")
    }
    // @ts-ignore
    req?.user = user
    return next();
  } catch (error: any) {
    return next(error.message);
  }
};
export { verifyJWT };
