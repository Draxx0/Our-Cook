const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {
  registerValidation,
  loginValidation,
} = require("../validations/user.validation");

const UserController = {
  register: async (req, res) => {
    try {
      // validate user data before create
      const { error } = registerValidation(req.body);
      if (error) {
        return res.status(400).send({ message: error.details[0].message });
      }

      // checking if user already in the database
      const emailExist = await User.findOne({ email: req.body.email });
      if (emailExist) {
        return res.status(400).send({ message: "Email already exists" });
      }

      //Hash passwords
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

      // create new user
      const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPassword,
        profilePicture: `https://cdn-icons-png.flaticon.com/512/149/149071.png`
      });

      const newUser = await user.save();
      res.send({ user: newUser._id });
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },
  login: async (req, res) => {
    try {
      // validate user data before create
      const { error } = loginValidation(req.body);
      if (error) {
        return res.status(400).send({ message: error.details[0].message });
      }

      // checking if user already in the database
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res.status(400).send({ message: "Email or password is wrong" });
      }

      // check if password is correct
      const validPass = await bcrypt.compare(req.body.password, user.password);

      if (!validPass) {
        return res.status(400).send({ message: "Email or password is wrong" });
      }

      // create and assign a token
      const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
      res.header("auth-token", token).send(token);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },
  delete: async (req, res) => {
    try {
      const deleteUser = await User.findByIdAndDelete(req.params.id);
      res.send(deleteUser);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },
  getAll: async (req, res) => {
    try {
      const user = await User.find()
        .populate("chef")
        .populate("comments")
        .populate("favorites")
        .populate("articles");
      res.send(user);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },
  getUserById: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      res.send(user);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },
};

module.exports = UserController;
