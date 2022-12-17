const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  recipe: {
    type: Schema.Types.ObjectId,
    ref: "Recipe",
  },
});

module.exports = mongoose.model("Favorite", favoriteSchema);
