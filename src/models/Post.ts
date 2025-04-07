import * as mongoose from "mongoose";
import { model } from "mongoose";
import Comment from "./Comment";

const postSchema = new mongoose.Schema({
  user_id: { type: mongoose.Types.ObjectId, required: true },
  created_at: { type: Date, required: true },
  updated_at: { type: Date, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  comments: [{ type: mongoose.Types.ObjectId, ref: "comments" }],
});

postSchema.post("deleteMany", async function (docs) {
  const deletedPostIds = docs.map((doc) => doc._id);
  await Comment.deleteMany({ postId: { $in: deletedPostIds } });
});

postSchema.virtual("commentCount").get(function () {
  return this.comments.length;
});
export default model("posts", postSchema);
