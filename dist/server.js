"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express = require("express");
const cors = require("cors");
const env_1 = require("./environments/env");
const mongoose = require("mongoose");
const UserRouter_1 = require("./routers/UserRouter");
const PostRouter_1 = require("./routers/PostRouter");
const CommentRouter_1 = require("./routers/CommentRouter");
const bodyParser = require("body-parser");
const Jobs_1 = require("./jobs/Jobs");
class Server {
    constructor() {
        this.app = express();
        this.setConfigurations();
        this.setRoutes();
        this.error404Handler();
        this.handleErrors();
    }
    setConfigurations() {
        this.connectMongoDb();
        this.configureBodyParser();
        this.configureCors();
        Jobs_1.Jobs.runRequiredJobs();
    }
    connectMongoDb() {
        const databaseUrl = (0, env_1.getEnvironmentVariables)().db_url;
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
        this.app.use(cors({
            origin: "*", // Allows all origins, replace with a specific origin or list for security if needed
            methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Specify allowed methods
            allowedHeaders: ["Content-Type", "Authorization"], // Specify allowed headers
        }));
    }
    setRoutes() {
        this.app.use("/src/uploads", express.static("src/uploads"));
        this.app.use("/api/user", UserRouter_1.default);
        this.app.use("/api/post", PostRouter_1.default);
        this.app.use("/api/comment", CommentRouter_1.default);
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
exports.Server = Server;
