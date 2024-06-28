import mongoose from "mongoose";
import { User } from "../interface/user.interface";
import { userSchema } from "../schema/user.schema";
import bcrypt from "bcrypt";
// hash the password before save into the database
userSchema.pre("save", async function (next) {
  try {
    const user = this;
    if (!user.isModified("password")) {
      return next();
    }
    const genSalt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(user.password, genSalt);
    user.password = hashPassword;
    return next();
  } catch (error: any) {
    console.log(
      `something went wrong while hash the password ${error.message}`
    );
  }
});
export default mongoose.model<User>("User", userSchema);