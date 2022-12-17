const Chef = require("../models/chef.model");
const User = require("../models/user.model");

const ChefController = {
  create: async (req, res) => {
    try {
      const chef = new Chef(req.body);
      const user = await User.findById(req.body.user);
      user.chef.push(chef);
      await user.save();
      const newChef = await chef.save();
      res.send(newChef);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },
  delete: async (req, res) => {
    try {
      const deleteChef = await Chef.findByIdAndDelete(req.params.id);
      res.send(deleteChef);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },
  getAll: async (req, res) => {
    try {
      const chef = await Chef.find().populate("recipes");
      res.send(chef);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },
  getRecipeById: async (req, res) => {
    try {
      const chef = await Chef.findById(req.params.id);
      res.send(chef);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },
};

module.exports = ChefController;
