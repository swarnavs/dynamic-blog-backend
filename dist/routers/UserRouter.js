"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
const UserValidators_1 = require("../validators/UserValidators");
const GlobalMiddleWare_1 = require("../middlewares/GlobalMiddleWare");
const Utils_1 = require("../utils/Utils");
class UserRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.deleteRoutes();
    }
    getRoutes() {
        this.router.get("/send/verification/email", GlobalMiddleWare_1.GlobalMiddleWare.authenticate, UserController_1.UserController.resendVerificationEmail);
        this.router.get("/login", UserValidators_1.UserValidators.login(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, UserController_1.UserController.login);
        this.router.get("/reset/token", UserValidators_1.UserValidators.sendResetPasswordEmail(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, UserController_1.UserController.sendResetPasswordEmail);
        this.router.get("/verify/token", UserValidators_1.UserValidators.verifyResetPasswordToken(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, UserController_1.UserController.verifyResetPasswordToken);
    }
    postRoutes() {
        this.router.post("/signup", UserValidators_1.UserValidators.signUp(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, UserController_1.UserController.signUp);
    }
    patchRoutes() {
        this.router.patch("/verify", GlobalMiddleWare_1.GlobalMiddleWare.authenticate, UserValidators_1.UserValidators.verifyUser(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, UserController_1.UserController.verify);
        this.router.patch("/update/password", GlobalMiddleWare_1.GlobalMiddleWare.authenticate, UserValidators_1.UserValidators.updatePassword(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, UserController_1.UserController.updatePassword);
        this.router.patch("/reset/password", UserValidators_1.UserValidators.resetPassword(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, UserController_1.UserController.resetPassword);
        this.router.patch("/update/profilePic", GlobalMiddleWare_1.GlobalMiddleWare.authenticate, new Utils_1.Utils().multer.single("profile_pic"), UserValidators_1.UserValidators.updateProfilePic(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, UserController_1.UserController.updateProfilePic);
        this.router.patch("/update/profile", GlobalMiddleWare_1.GlobalMiddleWare.authenticate, UserValidators_1.UserValidators.updateProfile(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, UserController_1.UserController.updateProfile);
    }
    deleteRoutes() { }
}
exports.default = new UserRouter().router;
