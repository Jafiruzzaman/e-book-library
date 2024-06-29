import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { config } from "./config/config";
import { limit } from "./constant/constant";
import { authRouter } from "./router/auth.router";
import { ContactRouter } from "./router/contact.router";
const app = express();
// configure cors
app.use(
  cors({
    origin: config.cors_origin,
    methods: "GET POST PATCH PUT DEL UPDATE",
    credentials: true,
  })
);
// cookie-parser configuration
app.use(cookieParser());
// express json configuration
app.use(
  express.json({
    limit: limit,
  })
);
// express urlencoded configuration
app.use(
  express.urlencoded({
    extended: true,
    limit: limit,
  })
);
// use public as a local storage
app.use(express.static("public"));

// auth routes
app.use("/api/v1/auth", authRouter);

// contact routes
app.use("/api/v1/users", ContactRouter);

export { app };