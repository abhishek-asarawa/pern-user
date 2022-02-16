import "core-js/stable";
import "regenerator-runtime/runtime";
// importing packages
import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import helmet from "helmet";

import logger from "./logger";

// response function
import response from "./utils/response";

// routes
import { authRoutes } from "./routes";

// connecting to database
import "./database";
import path from "path";

dotenv.config();

// init app
const app = express();

// setting port
const port = process.env.PORT || 5000;

// middleware
app.use(helmet());
app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "../src/build")));

// routes
app.use("/api/auth", authRoutes);

// 404 error handling
app.use("/api/*", (req, res, next) => {
  const err = new Error("Path not found");
  next(err);
});

// global error handler
app.use((err, req, res, next) => {
  logger.error(err);

  if (err.message === "Path not found")
    return response(res, null, "Path not found", true, 404);

  response(res, null, "Internal error. Sorry!!!", true, 500);
});

// react routes
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../src/build", "index.html"));
});

app.listen(port, logger.info(`Server running on ${port}`));
