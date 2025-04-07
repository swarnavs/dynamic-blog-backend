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
const Comment_1 = require("./Comment");
const postSchema = new mongoose.Schema({
    user_id: { type: mongoose.Types.ObjectId, required: true },
    created_at: { type: Date, required: true },
    updated_at: { type: Date, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    comments: [{ type: mongoose.Types.ObjectId, ref: "comments" }],
});
postSchema.post("deleteMany", function (docs) {
    return __awaiter(this, void 0, void 0, function* () {
        const deletedPostIds = docs.map((doc) => doc._id);
        yield Comment_1.default.deleteMany({ postId: { $in: deletedPostIds } });
    });
});
postSchema.virtual("commentCount").get(function () {
    return this.comments.length;
});
exports.default = (0, mongoose_1.model)("posts", postSchema);
