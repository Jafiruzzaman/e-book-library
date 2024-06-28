import { Router } from "express";
import { signin, signout, signup } from "../auth/auth.controller";
const authRouter = Router();
// routes
authRouter.route("/signup").post(signup);
authRouter.route("/signin").post(signin);
authRouter.route("/signout").post(signout);
export { authRouter };
