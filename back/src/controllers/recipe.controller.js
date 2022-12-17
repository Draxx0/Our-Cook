const Recipe = require("../models/recipe.model");
const Chef = require("../models/chef.model");

const RecipeController = {
  create: async (req, res) => {
    try {
      const recipe = new Recipe(req.body);
      const chef = await Chef.findById(req.body.chef);
      chef.recipes.push(recipe);
      await chef.save();
      const newRecipe = await recipe.save();
      res.send(newRecipe);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },
  delete: async (req, res) => {
    try {
      const deleteRecipe = await Recipe.findByIdAndDelete(req.params.id);
      res.send(deleteRecipe);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },
  update: async (req, res) => {
    try {
      const updateRecipe = await Recipe.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );
      res.send(updateRecipe);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },
  getAll: async (req, res) => {
    try {
      const recipe = await Recipe.find().populate("chef");
      res.send(recipe);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },
  getRecipeById: async (req, res) => {
    try {
      const recipe = await Recipe.findById(req.params.id);
      res.send(recipe);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },
};

module.exports = RecipeController;
