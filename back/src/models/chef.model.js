const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chefSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  recipes: [
    {
      type: Schema.Types.ObjectId,
      ref: "Recipe",
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

module.exports = mongoose.model("Chef", chefSchema);
