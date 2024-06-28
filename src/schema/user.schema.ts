import { Schema } from "mongoose";
import { User } from "../interface/user.interface";
const userSchema = new Schema<User>(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 50,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      minlength: 3,
      maxlength: 50,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 8,
      maxlength: 50,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    refreshToken:{
      type:String
    }
  },
  {
    timestamps: true,
  }
);
export { userSchema };