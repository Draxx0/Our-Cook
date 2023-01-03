const express = require("express");
const chefController = require("../controllers/chef.controller");
const verify = require("../middlewares/verifyToken");
const router = express.Router();

const endPoint = "/chefs";

router.post(`${endPoint}`, chefController.create);
router.delete(`${endPoint}/:id`, chefController.delete);
router.get(`${endPoint}`, chefController.getAll);
router.get(`${endPoint}/:id`, chefController.getRecipeById);

module.exports = router;
