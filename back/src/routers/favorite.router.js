const express = require("express");
const favoriteControler = require("../controllers/favorite.controller");
const verify = require("../middlewares/verifyToken");
const router = express.Router();

const endPoint = "/favorites";

router.post(`${endPoint}`, verify, favoriteControler.create);
router.delete(`${endPoint}/:id`, favoriteControler.delete);
router.get(`${endPoint}`, favoriteControler.getAll);

module.exports = router;
