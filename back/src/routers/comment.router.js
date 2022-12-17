const express = require("express");
const commentController = require("../controllers/comment.controller");
const verify = require("../middlewares/verifyToken");
const router = express.Router();

const endPoint = "/comments";

router.post(`${endPoint}`, verify, commentController.create);
router.delete(`${endPoint}/:id`, commentController.delete);
router.get(`${endPoint}`, commentController.getAll);
// router.get(`${endPoint}/user/:id`, commentController.getCommentsByUser);
// router.get(`${endPoint}/recipe/:id`, commentController.getCommentsByRecipe);

module.exports = router;
