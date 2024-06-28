import { Router } from "express";

const authRouter = Router();
// routes
authRouter.route("/signup").post();
authRouter.route("/signin").post();
authRouter.route("/signout").post();
export { authRouter };
