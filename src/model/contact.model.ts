import { model } from "mongoose";
import { Contact } from "../interface/contact.interface";
import { contactSchema } from "../schema/contact.schema";
const ContactModel = model<Contact>("Contact", contactSchema);
export { ContactModel };
