const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../models");
// const usersController = require("./usersController");
// const { response } = require("express");
// const { User } = require("../models");

// Weird

module.exports = {
  signUp: function (req, res) {
    const { userName, email, password, isDm } = req.body;
    // console.log(email);
    // console.log(password);
    if (!email.trim() || !password.trim()) {
      res.status(400).json({
        msg: "Missing Credentials"
      });
    }
    // CHECK FOR EXISITING USER
    db.User.findOne({email})
    .then((user) =>{
      if(user) return res.json({msg:"Unable to Sign up"}) //<--- If user with credentials already existis, prevent new user create
      bcrypt
        .hash(password, 10)
        .then((hashedPassword) => {
          // console.log(hashedPassword);
          db.User.create({
            userName: userName,
            email: email,
            isDm: isDm,
            password: hashedPassword,
          })
            .then((response) => {
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
                user: {
                  _id: response._id,
                  isDm: response.isDm,
                  email: response.email,
                  userName: response.userName
                },
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
    })

  },

  login: function (req, res) {
    const { email, password } = req.body;
    db.User.findOne({ email })
      .then((foundUser) => {
        console.log(req.body);
        // console.log(foundUser);
        if (!foundUser)
          return res.json({ message: "User not found" });
        bcrypt.compare(password, foundUser.password)
          .then((isMatch) => {
            if (!isMatch)
              return res.status(400).json({ message: "Invalid password" });
            if (isMatch) {
              console.log(isMatch);
              console.log(foundUser)
              const token = jwt.sign(
                {
                  _id: foundUser._id,
                  email: foundUser.email,
                },
                process.env.REACT_APP_SECRET
              );
              res.json({
                error: false,
                user: {
                  _id: foundUser._id,
                  isDm: foundUser.isDm,
                  email: foundUser.email,
                  userName: foundUser.userName
                },
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
