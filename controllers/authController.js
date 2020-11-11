const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../models");
// const usersController = require("./usersController");
// const { response } = require("express");
// const { User } = require("../models");

module.exports = {
  signUp: function (req, res) {
    const { userName, email, password } = req.body;
    // console.log(email);
    // console.log(password);
    if (!email.trim() || !password.trim()) {
      res.status(400);
    } else {
      bcrypt
        .hash(password, 10)
        .then((hashedPassword) => {
          // console.log(hashedPassword);
          db.User.create({
            userName: userName,
            email: email,
            password: hashedPassword,
          })
            .then((response) => {
              console.log(response);
              // res.json(response);
              const token = jwt.sign(
                {
                  _id: response._id,
                  email: response.email,
                  userName: response.userName,
                },
                process.env.REACT_APP_SECRET
              );
              res.json({
                error: false,
                data: token,
                message: "Signup Successful",
              });
            })
            .catch((err) => {
              console.log(err);
              res.status(500).json({
                error: true,
                data: null,
                message: "Signup Unsuccessful",
              });
            });
        })
        .catch((err) => {
          res.status(500);
        });
    }
  },

  login: function (req, res) {
    const { email, password } = req.body;
    db.User.findOne({ email })
      .then((foundUser) => {
        console.log(req.body);
        // console.log(foundUser);
        if (!foundUser)
          return res.status(400).json({ message: "User not found" });

        bcrypt
          .compare(password, foundUser.password)
          .then((isMatch) => {
            if (!isMatch)
              return res.status(400).json({ message: "Invalid password" });
            console.log(isMatch);
            if (isMatch) {
              const token = jwt.sign(
                {
                  _id: foundUser._id,
                  email: foundUser.email,
                },
                process.env.REACT_APP_SECRET
              );
              res.json({
                error: false,
                data: token,
                message: "Login Successful",
              });
            } else {
              // If the passwords don't match, send back an error.
              res.status(401).json({
                error: true,
                data: null,
                message: "Failed to sign in.",
              });
            }
          })
          .catch((err) => {
            console.log(err);
            res.status(401).json({
              error: true,
              data: null,
              message: "Failled to sign in",
            });
          });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          error: true,
          data: null,
          message: "failed to login",
        });
      });
  },
};
