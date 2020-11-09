const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../models");
// const usersController = require("./usersController");
const { response } = require("express");

module.exports = {
  signUp: function (req, res) {
    const { email, password } = req.body;
    // console.log(email);
    // console.log(password);
    if (!email.trim() || !password.trim()) {
      res.status(400);
    } else {
      bcrypt
        .hash(password, 10)
        .then((hashedPassword) => {
          console.log(hashedPassword);
          usersController.createUser;
        })
        .then((response) => console.log(response));
    }
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
