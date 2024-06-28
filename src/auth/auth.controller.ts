import { asyncHandler } from "../helper/asyncHandler";
import { NextFunction, Request, Response } from "express";
import userModel from "../model/user.model";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";
import { config } from "../config/config";
import { options } from "../global/options";
// signup
const signup = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { username, email, password } = await req.body;
      console.log("username", username);
      const userExist = await userModel.findOne({ email });
      if (userExist) {
        res.status(409).json({
          message: "user is already exist with this email",
        });
        return next();
      }
      const signUp = await userModel.create({ username, email, password });
      return res.status(201).json({
        message: "user signup successfully",
        data: signUp,
      });
    } catch (error: any) {
      return res.json({
        message: error.message,
      });
    }
  }
);

// signin
const signin = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = await req.body;
      // if user is already exist
      const userExist = await userModel.findOne({ email });
      if (!userExist) {
        res.status(401).json({
          message: "Invalid Email address",
        });
        return next();
      }
      // check is password is match or not
      const isPasswordCorrect = await bcrypt.compare(
        password,
        userExist.password
      );
      if (!isPasswordCorrect) {
        res.status(401).json({
          message: "Invalid user credentials",
        });
        return next();
      }
      const signInUser = await userModel.findOne({ email }).select("-password");
      const generateAccessAndRefreshToken = async () => {
        try {
          const accessToken = await sign(
            {
              _id: userExist._id,
              username: userExist.username,
              email: userExist.email,
              isAdmin: userExist.isAdmin,
            },
            config.access_token_secret,
            {
              expiresIn: config.access_token_expiry,
            }
          );
          const refreshToken = await sign(
            {
              _id: userExist._id,
            },
            config.refresh_token_secret,
            {
              expiresIn: config.refresh_token_expiry,
            }
          );
          userExist.refreshToken = refreshToken;
          userExist.save({ validateBeforeSave: false });
          return { accessToken, refreshToken };
        } catch (error) {
          return next(error);
        }
      };
      const { accessToken, refreshToken }: any =
        await generateAccessAndRefreshToken();
      const signIn = await userModel.findOne({ email }).select("-password");
      return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json({
          message: "user signin successfully",
          data: signIn,
        });
    } catch (error: any) {
      return res.json({
        message: error.message,
      });
    }
  }
);

// signout
const signout = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      return res.status(200).json({
        message: "user signout successfully",
      });
    } catch (error: any) {
      return res.json({
        message: error.message,
      });
    }
  }
);

export { signup, signin, signout };