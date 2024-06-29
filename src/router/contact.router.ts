import { Router } from "express";
import { verifyJWT } from "../middlewares/verifyJWT";
import { validate } from "../middlewares/validate.middleware";
import { ContactSchema } from "../validations/contact.validation";
import { Contacts } from "../controller/contact.controller";
const ContactRouter = Router();
//
ContactRouter.route("/contact").post(
  verifyJWT,
  validate(ContactSchema),
  Contacts
);
export { ContactRouter };