const express = require("express");
const articleCommentController = require("../controllers/articleComment.controller");
const verify = require("../middlewares/verifyToken");
const router = express.Router();

const endPoint = "/articlesComments";

router.post(`${endPoint}`, verify, articleCommentController.create);
router.delete(`${endPoint}/:id`, articleCommentController.delete);
router.put(`${endPoint}/:id`, articleCommentController.update);
router.get(`${endPoint}`, articleCommentController.getAll);

module.exports = router;
