import { asyncHandler } from "../helper/asyncHandler";
import { NextFunction, Request, Response } from "express";
import { ContactModel } from "../model/contact.model";
const Contacts = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { username, email, message } = req.body;
      const messageData = await ContactModel.create({
        username: username,
        email: email,
        message: message,
      });
      return res.status(201).json({
        message: "message send successfully",
        data: messageData,
      });
    } catch (error) {}
  }
);
export { Contacts };