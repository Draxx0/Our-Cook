const Article = require("../models/article.model");
const ArticleComment = require("../models/articleComment.model");
const User = require("../models/user.model");

const ArticleController = {
  create: async (req, res) => {
    try {
      const article = new Article(req.body);
      
      const user = await User.findById(req.body.user);
      user.articles.push(article._id);
      await user.save();

      const newArticle = await article.save();
      res.send(newArticle);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },
  delete: async (req, res) => {
    try {
      const articleComments = await ArticleComment.find();
      articleComments.forEach(async (articleComment) => {
        if (articleComment.article == req.params.id) {
          await ArticleComment.findByIdAndDelete(articleComment._id);
        }
      });
      const deleteArticle = await Article.findByIdAndDelete(req.params.id);
      res.send(deleteArticle);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },
  getAll: async (req, res) => {
    try {
      const chef = await Article.find().populate("articleComments");
      res.send(chef);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },
  update: async (req, res) => {
    try {
      const updateArticle = await Article.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.send(updateArticle);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },
};

module.exports = ArticleController;
