const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  articleComments: [
    {
      type: Schema.Types.ObjectId,
      ref: "ArticleComment",
    },
  ],
  tag: {
    type: String,
    required: true,
    enum: ["Articles", "Annonces", "Questions"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  deletedAt: {
    type: Date,
    default: null,
  },
});

module.exports = mongoose.model("Article", articleSchema);
