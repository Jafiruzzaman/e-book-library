import { Router } from "express";
import { signin, signout, signup } from "../auth/auth.controller";
import { validate } from "../middlewares/validate.middleware";
import { signInSchema, signupSchema } from "../validations/auth.validation";
import { verifyJWT } from "../middlewares/verifyJWT";
const authRouter = Router();
// routes
authRouter.route("/signup").post(validate(signupSchema),signup);
authRouter.route("/signin").post(validate(signInSchema),signin);
authRouter.route("/signout").post(verifyJWT,signout);
export { authRouter };
