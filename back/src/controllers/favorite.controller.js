const Favorite = require("../models/favorite.model");
const Recipe = require("../models/recipe.model");
const User = require("../models/user.model");

const favoriteController = {
  create: async (req, res) => {
    try {
      const favorite = await Favorite.create(req.body);
      const recipe = await Recipe.findById(req.body.recipe);
      const user = await User.findById(req.body.user);

      recipe.favorites.push(favorite);
      user.favorites.push(recipe);

      await recipe.save();
      await user.save();
      await favorite.save();

      res.send(favorite);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },
  delete: async (req, res) => {
    try {
      const deleteFavorite = await Favorite.findByIdAndDelete(req.params.id);
      res.send(deleteFavorite);
    } catch (error) {
      res.status(400).send({ message: error.message });
      s;
    }
  },
  getAll: async (req, res) => {
    try {
      const favorite = await Favorite.find()
        .populate("user")
        .populate("recipe");
      res.send(favorite);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },
};

module.exports = favoriteController;
