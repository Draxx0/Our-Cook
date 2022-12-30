const Comment = require("../models/comment.model");
const Recipe = require("../models/recipe.model");
const User = require("../models/user.model");

const CommentController = {
  create: async (req, res) => {
    try {
      const comment = await Comment.create(req.body);

      const recipe = await Recipe.findById(req.body.recipe);
      recipe.comments.push(comment);
      const comments = await Comment.find();
       const commentStars = comments.map(comment => {
        return comment.stars
      })
      recipe.stars = commentStars.reduce((a, b) => a + b, 0) / comments.length;


      await recipe.save();

      const user = await User.findById(req.body.user);
      user.comments.push(comment);
      await user.save();

      res.send(comment);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },
  delete: async (req, res) => {
    try {
      const deleteComment = await Comment.findByIdAndDelete(req.params.id);
      res.send(deleteComment);
    } catch (error) {
      res.status(400).send({ message: error.message });
      s;
    }
  },
  deleteAll: async (req, res) => {
    try {
      const deleteAllComments = await Comment.deleteMany();
      res.send(deleteAllComments);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },
  getAll: async (req, res) => {
    try {
      const comment = await Comment.find().populate("user").populate("recipe");
      res.send(comment);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },
};

module.exports = CommentController;
