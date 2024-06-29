import { Router } from "express";
import { verifyJWT } from "../middlewares/verifyJWT";
const ContactRouter = Router();
//
ContactRouter.route("/contact").post(verifyJWT);
export { ContactRouter };