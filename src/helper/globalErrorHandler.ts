import { NextFunction, Request, Response } from "express";
import { HttpError } from "http-errors";
import { config } from "../config/config";
export const globalErrorHandler = async (
  error: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const message = error.message || "something went wrong";
  const statuscode = error.statusCode || 500;
  const errorStack = error.stack === config.node_env ? error.stack : "";
  return res.status(statuscode).json({
    message: message,
    error: errorStack,
  });
};
