"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongoose_1 = require("mongoose");
const Post_1 = require("./Post");
const Comment_1 = require("./Comment");
const commentSchema = new mongoose.Schema({
    created_at: { type: Date, required: true },
    updated_at: { type: Date, required: true },
    content: { type: String, required: true },
});
commentSchema.post("deleteMany", function (query) {
    return __awaiter(this, void 0, void 0, function* () {
        // Find all comments that match the deletion query
        const deletedComments = yield Comment_1.default.find(query);
        if (deletedComments.length === 0)
            return; // No comments found, exit
        // Extract IDs of the deleted comments
        const deletedCommentIds = deletedComments.map((comment) => comment._id);
        // Remove these comments from any associated posts
        yield Post_1.default.updateMany({ comments: { $in: deletedCommentIds } }, // Find posts containing these comments
        { $pull: { comments: { $in: deletedCommentIds } } } // Remove them
        );
    });
});
exports.default = (0, mongoose_1.model)("comments", commentSchema);
