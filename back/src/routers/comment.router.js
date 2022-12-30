const express = require("express");
const commentController = require("../controllers/comment.controller");
const verify = require("../middlewares/verifyToken");
const router = express.Router();

const endPoint = "/comments";

router.post(`${endPoint}`, verify, commentController.create);
router.delete(`${endPoint}/:id`, commentController.delete);
router.get(`${endPoint}`, commentController.getAll);
router.delete(`${endPoint}`, commentController.deleteAll);

module.exports = router;
