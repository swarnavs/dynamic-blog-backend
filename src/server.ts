import * as express from "express";
import * as cors from "cors";
import { getEnvironmentVariables } from "./environments/env";
import * as mongoose from "mongoose";
import UserRouter from "./routers/UserRouter";
import PostRouter from "./routers/PostRouter";
import CommentRouter from "./routers/CommentRouter";
import bodyParser = require("body-parser");
import { Jobs } from "./jobs/Jobs";

export class Server {
  public app: express.Application = express();

  constructor() {
    this.setConfigurations();
    this.setRoutes();
    this.error404Handler();
    this.handleErrors();
  }

  setConfigurations() {
    this.connectMongoDb();
    this.configureBodyParser();
    this.configureCors();
    Jobs.runRequiredJobs();
  }

  connectMongoDb() {
    const databaseUrl = getEnvironmentVariables().db_url;
    mongoose
      .connect(databaseUrl)
      .then(() => {
        console.log("Connected to database");
      })
      .catch((err) => {
        console.error("Database connection error:", err);
      });
  }

  configureBodyParser() {
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  configureCors() {
    // Allow all origins or you can specify specific origins as needed
    this.app.use(
      cors({
        origin: "*", // Allows all origins, replace with a specific origin or list for security if needed
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Specify allowed methods
        allowedHeaders: ["Content-Type", "Authorization"], // Specify allowed headers
      })
    );
  }

  setRoutes() {
    this.app.use("/src/uploads", express.static("src/uploads"));
    this.app.use("/api/user", UserRouter);
    this.app.use("/api/post", PostRouter);
    this.app.use("/api/comment", CommentRouter);
  }

  error404Handler() {
    this.app.use((req, res) => {
      res.status(404).json({
        message: "Not Found",
        status_code: 404,
      });
    });
  }

  handleErrors() {
    this.app.use((error, req, res, next) => {
      const errorStatus = req.errorStatus || 500;
      res.status(errorStatus).json({
        message: error.message || "Something Went Wrong. Please Try Again",
        status_code: errorStatus,
      });
    });
  }
}
