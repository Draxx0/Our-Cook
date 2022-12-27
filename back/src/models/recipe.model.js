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
  calorie: {
    type: Number,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ["Petit-déjeuner", "Entrée", "Plat", "Dessert", "Apéritif"],
  },
  ingredients: [
    {
      name: {
        type: String,
        required: true,
      },
      quantity: {
        type: String,
        required: true,
      },
    },
  ],
  steps: [
    {
      name: {
        type: String,
        required: true,
      },
    },
  ],
  favorites: [
    {
      type: Schema.Types.ObjectId,
      ref: "Favorite",
    },
  ],
  chef: {
    type: Schema.Types.ObjectId,
    ref: "Chef",
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
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
