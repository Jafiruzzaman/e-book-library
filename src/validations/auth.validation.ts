import { z } from "zod";
const signInSchema = z.object({
  email: z
    .string({ required_error: "email is required" })
    .email()
    .trim()
    .min(3, "email must be at least 3 character")
    .max(50, "email must not be more than 50 character"),
  password: z
    .string({ required_error: "password is required" })
    .trim()
    .min(8, "password must be at least 8 character")
    .max(50, "password must not be more than 50 character"),
});
const signupSchema = signInSchema.extend({
  username: z
    .string({ required_error: "user name is required" })
    .trim()
    .min(3, "user name must be at least 3 character")
    .max(50, "user name must not be more than 50 character"),
})
export { signInSchema,signupSchema };