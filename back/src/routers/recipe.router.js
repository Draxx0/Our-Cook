const express = require("express");
const recipeController = require("../controllers/recipe.controller");
const router = express.Router();

const endPoint = "/recipes";

router.post(`${endPoint}`, recipeController.create);
router.delete(`${endPoint}/:id`, recipeController.delete);
router.put(`${endPoint}/:id`, recipeController.update);
router.get(`${endPoint}`, recipeController.getAll);
router.get(`${endPoint}/:id`, recipeController.getRecipeById);

module.exports = router;
