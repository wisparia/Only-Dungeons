const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../models");
// const usersController = require("./usersController");
const { response } = require("express");

module.exports = {
  signUp: function (req, res) {
    const { userName, email, password } = req.body;
    // console.log(email);
    // console.log(password);
    if (!email.trim() || !password.trim()) {
      res.status(400);
    } else {
      bcrypt.hash(password, 10).then((hashedPassword) => {
        // console.log(hashedPassword);
        db.User.create({
          userName: userName,
          email: email,
          password: hashedPassword,
        }).then((response) => {
          console.log(response);
          res.json(response);
        });
      });
    }
  },

  login: function (req, res) {
    const { email, password } = req.body;
    db.User.findOne({ email }).then((foundUser) => {
      console.log(req.body)
      // console.log(foundUser);
      if (!foundUser) return res.status(400).json({message: "User not found"})

      bcrypt.compare(password, foundUser.password)
      .then((isMatch)=> {
          if (!isMatch) return res.status(400).json({message: "Invalid password"})
          console.log(isMatch)
      });
    });
  },
 
};

// Section is for the sign up

// router.post("/api/signup", (req, res) => {
//   const { email, password } = req.body;
//   console.log(email);
//   console.log(password);
//   if (!email.trim() || !password.trim()) {
//     res.status(400);
//   } else {
//     bcrypt.hash(password, 10).then((hashedPassword) => {
//       console.log(hashedPassword);
//       usersController.createUser;
//     }).then((response)=>console.log(response))
//   }
// });

// router.post("/api/login", (req, res) => {
//   const { email, password } = req.body;
// });
