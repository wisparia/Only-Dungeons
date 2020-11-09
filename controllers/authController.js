const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../models");

// Section is for the sign up

router.post("/api/signup", (req, res) => {
  const { email, password } = req.body;
  console.log(email);
  console.log(password);
});
