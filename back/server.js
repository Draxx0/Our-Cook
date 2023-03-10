const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8000;
const userRouter = require("./src/routers/user.router");
const recipeRouter = require("./src/routers/recipe.router");
const chefRouter = require("./src/routers/chef.router");
const commentRouter = require("./src/routers/comment.router");
const favoriteRouter = require("./src/routers/favorite.router");
const articleRouter = require("./src/routers/article.router");
const articleCommentRouter = require("./src/routers/articleComment.router");
const authRouter = require("./src/routers/auth.router");
const connect = require("./config/mongoose.config");

connect();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", userRouter);
app.use("/api", recipeRouter);
app.use("/api", chefRouter);
app.use("/api", commentRouter);
app.use("/api", favoriteRouter);
app.use("/api", articleRouter);
app.use("/api", articleCommentRouter);
app.use("/api", authRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
