const ArticleComment = require("../models/articleComment.model");
const Article = require("../models/article.model");

const ArticleCommentController = {
  create: async (req, res) => {
    try {
      const articleComment = new ArticleComment(req.body);
      const newArticleComment = await articleComment.save();

      const article = await Article.findById(req.body.article);
      article.articleComments.push(newArticleComment._id);
      await article.save();

      res.send(newArticleComment);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },
  delete: async (req, res) => {
    try {
      const deleteArticleComment = await ArticleComment.findByIdAndDelete(
        req.params.id
      );
      res.send(deleteArticleComment);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },
  getAll: async (req, res) => {
    try {
      const articleComment = await ArticleComment.find()
        .populate("user")
        .populate("article");
      res.send(articleComment);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },
  update: async (req, res) => {
    try {
      const updateArticleComment = await ArticleComment.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.send(updateArticleComment);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },
};

module.exports = ArticleCommentController;
