import { z } from "zod";
const ContactSchema = z.object({
  username: z.string({ required_error: "username is required" }).trim(),
  email: z.string({ required_error: "email is required" }).trim().email(),
  message: z.string({ required_error: "message is required" }).trim(),
});
export { ContactSchema };