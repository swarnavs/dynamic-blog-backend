import * as mongoose from "mongoose";
import { model } from "mongoose";
import Post from "./Post";
import Comment from "./Comment";

const commentSchema = new mongoose.Schema({
  created_at: { type: Date, required: true },
  updated_at: { type: Date, required: true },
  content: { type: String, required: true },
});

commentSchema.post("deleteMany", async function (query) {
  // Find all comments that match the deletion query
  const deletedComments = await Comment.find(query);

  if (deletedComments.length === 0) return; // No comments found, exit

  // Extract IDs of the deleted comments
  const deletedCommentIds = deletedComments.map((comment) => comment._id);

  // Remove these comments from any associated posts
  await Post.updateMany(
    { comments: { $in: deletedCommentIds } }, // Find posts containing these comments
    { $pull: { comments: { $in: deletedCommentIds } } } // Remove them
  );
});

export default model("comments", commentSchema);
