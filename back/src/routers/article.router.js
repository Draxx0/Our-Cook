const express = require("express");
const articleController = require("../controllers/article.controller");
const verify = require("../middlewares/verifyToken");
const router = express.Router();

const endPoint = "/articles";

router.post(`${endPoint}`, verify, articleController.create);
router.delete(`${endPoint}/:id`, articleController.delete);
router.get(`${endPoint}`, articleController.getAll);

module.exports = router;
