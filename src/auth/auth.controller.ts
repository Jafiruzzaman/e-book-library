import { asyncHandler } from "../helper/asyncHandler";
import { NextFunction, Request, Response } from "express";
// signup
const signup = asyncHandler(
  (req: Request, res: Response, next: NextFunction) => {
    try {
      return res.json({
        message: "user signup successfully",
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
      return res.json({
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
      return res.json({
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