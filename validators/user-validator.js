const { z } = require("zod");

//creating an object Schema
const signupSchema = z.object({
  firstname: z
    .string({ required_error: "firstname is required" }).trim()
    .min(3, { message: "firstname must be at least of 3 character" })
    .max(20, { message: "firstname must not be more than 20 characters" }),
  lastname: z
    .string({ required_error: "lastname is required" })
    .trim()
    .min(3, { message: "lastname must be at least of 3 character" })
    .max(20, { message: "lastname must not be more than 20 characters" }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be at least of 3 characters" })
    .max(255, { message: "Email must not be more than 255 characters" }),
  password: z.string({ required_error: "password is required" })
      .trim()
      .min(6, { message: "password must be at least of 3 characters" })
      .max(20, { message: "password must not be more than 20 characters" }),
});

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required." })
    .trim()
    .email({ message: "Invalid email-address" })
    .min(3, { message: "Email must be exactly of 3 characters." })
    .max(255, { message: "Email must not be more than 255 characters." }),
  password: z
    .string({ required_error: "Password is required." })
    .min(7, { message: "Password must atleast be of 6 characters." })
    .max(1024, { message: "Password can't be greater than 1024 characters." }),
});




module.exports = {signupSchema,loginSchema};