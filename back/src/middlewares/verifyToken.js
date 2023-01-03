const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  console.log(req.header("token")); // Undefined quand je post un commentaire.
  const token = req.header("token");
  if (!token) return res.status(401).send("Access Denied");
  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send("Invalid Token");
  }
};