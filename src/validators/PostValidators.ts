import { body, param, query } from "express-validator";
import Post from "../models/Post";

export class PostValidators {
  static addPost() {
    return [
      body("title", "Post Title is Required").isString(),
      body("content", "Post Content is Required").isString(),
    ];
  }

  static getPostById() {
    return [
      param("id").custom((id, { req }) => {
        return Post.findOne({ _id: id }, { __v: 0, user_id: 0 })
          .populate("comments")
          .then((post) => {
            if (post) {
              req.post = post;
              return true;
            } else {
              throw new Error("Post Does Not Exist");
            }
          });
      }),
    ];
  }

  static editPost() {
    return [body("content", "Content is Required").isString()];
  }

  static deletePost() {
    return [
      param("id").custom((id, { req }) => {
        return Post.findOne({ _id: id }, { __v: 0, user_id: 0 }).then(
          (post) => {
            if (post) {
              req.post = post;
              return true;
            } else {
              throw new Error("Post Does Not Exist");
            }
          }
        );
      }),
    ];
  }
}
