import { asyncHandler } from "../helper/asyncHandler";
import { NextFunction, Request, Response } from "express";
import userModel from "../model/user.model";
// signup
const signup = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const {username,email,password} = await req.body;
      console.log("username",username)
      const userExist = await userModel.findOne({email})
      if (userExist) {
        res.status(409).json({
          message:"user is already exist with this email"
        })
        return next()
      }
      const signUp = await userModel.create({username,email,password})
      return res.status(201).json({
        message: "user signup successfully",
        data:signUp
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
  (req: Request, res: Response, next: NextFunction) => {
    try {
      return res.status(201).json({
        message: "user signin successfully",
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
  (req: Request, res: Response, next: NextFunction) => {
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