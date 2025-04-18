"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const GlobalMiddleWare_1 = require("../middlewares/GlobalMiddleWare");
const PostValidators_1 = require("../validators/PostValidators");
const PostController_1 = require("../controllers/PostController");
class PostRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.deleteRoutes();
    }
    getRoutes() {
        this.router.get('/me', GlobalMiddleWare_1.GlobalMiddleWare.authenticate, PostController_1.PostController.getPostByUser);
        this.router.get('/all', GlobalMiddleWare_1.GlobalMiddleWare.authenticate, PostController_1.PostController.getAllPosts);
        this.router.get('/:id', GlobalMiddleWare_1.GlobalMiddleWare.authenticate, PostValidators_1.PostValidators.getPostById(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, PostController_1.PostController.getPostById);
    }
    postRoutes() {
        this.router.post('/add', GlobalMiddleWare_1.GlobalMiddleWare.authenticate, PostValidators_1.PostValidators.addPost(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, PostController_1.PostController.addPost);
    }
    patchRoutes() {
        this.router.patch('/edit/:id', GlobalMiddleWare_1.GlobalMiddleWare.authenticate, PostValidators_1.PostValidators.editPost(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, PostController_1.PostController.editPost);
    }
    deleteRoutes() {
        this.router.delete('/delete/:id', GlobalMiddleWare_1.GlobalMiddleWare.authenticate, PostValidators_1.PostValidators.deletePost(), GlobalMiddleWare_1.GlobalMiddleWare.checkError, PostController_1.PostController.deletePost);
    }
}
exports.default = new PostRouter().router;
