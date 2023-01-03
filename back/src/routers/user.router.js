const express = require("express");
const UserController = require("../controllers/user.controller");
const router = express.Router();

const endPoint = "/users";

router.delete(`${endPoint}/:id`, UserController.delete);
router.get(`${endPoint}`, UserController.getAll);
router.get(`${endPoint}/:id`, UserController.getUserById);
router.put(`${endPoint}/:id`, UserController.update);

module.exports = router;
