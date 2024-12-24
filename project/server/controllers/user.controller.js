const user = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const userController = {
  //POST http://127.0.0.1:5000/api/user/signup
  signUp: async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(404).json({
        message: "Please Provide All the Data",
      });
    }
    const existing_user = await user.findOne({ email });
    if (existing_user) {
      return res.status(400).json({
        message: "User Name Exist",
      });
    }
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new user({ name, email, password: hashedPassword });
      await newUser.save();
      res.status(201).json({
        message: "Signup Successfully done...",
      });
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  },
  //POST http://127.0.0.1:5000/api/user/signin
  signIn: async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(404).json({
        message: "Please Provide All the Data",
      });
    }
    const existing_user = await user.findOne({ email });
    if (!existing_user) {
      return res.status(400).json({
        message: "User Name Not Exist",
      });
    }

    try {
      const isMatch = await bcrypt.compare(password, existing_user.password);
      if (!isMatch) {
        return res.status(400).json({
          message: "Password Not Matched....",
        });
      }

      const jwt_token = jwt.sign(
        { id: existing_user._id },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      res.status(201).json({
        message: "Signin Successfully done...",
        token: jwt_token,
      });
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  },
  //PUT http://127.0.0.1:5000/api/user/change-password
  changePassword: async (req, res) => {
    const { oldPassword, newPassword } = req.body;

    if (!oldPassword || !newPassword) {
      return res.status(404).json({
        message: "Please Provide All the Data",
      });
    }

    try {
      const existing_user = await user.findById(req.user.id);
      if (!user) {
        return res.status(400).json({ message: "user is not exist" });
      }

      const isMatch = await bcrypt.compare(oldPassword, existing_user.password);

      if (!isMatch) {
        return res.status(400).json({
          message: "Old Password Not Matched....",
        });
      }

      existing_user.password = await bcrypt.hash(newPassword, 10);
      await existing_user.save();
      res.status(200).json({ message: "Password Updated.." });
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  },
  getUser: async () => {},
  updateUser: async () => {},
};

module.exports = userController;
