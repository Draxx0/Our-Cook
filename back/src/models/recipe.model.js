const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  stars: {
    type: Number,
    default: null,
  },
  isFavorite: {
    type: Boolean,
    default: false,
  },
  chef: {
    type: Schema.Types.ObjectId,
    ref: "Chef",
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    }
  ],
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

module.exports = mongoose.model("Recipe", recipeSchema);
