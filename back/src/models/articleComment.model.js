const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleCommentSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  article: {
    type: Schema.Types.ObjectId,
    ref: "Article",
  },
  likes: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: null,
  },
  deletedAt: {
    type: Date,
    default: null,
  },
});

module.exports = mongoose.model("ArticleComment", articleCommentSchema);
