import { Router } from "express";
import { signin, signout, signup } from "../auth/auth.controller";
import { validate } from "../middlewares/validate.middleware";
import { signupSchema } from "../validations/auth.validation";
const authRouter = Router();
// routes
authRouter.route("/signup").post(validate(signupSchema),signup);
// authRouter.route("/signin").post(validate(),signin);
// authRouter.route("/signout").post(validate(),signout);
export { authRouter };
