const db = require("../models");
const jwt = require("jsonwebtoken");


// Defining methods for the booksController
module.exports = {
  findAll: function (req, res) {
    db.User.find({})
      .then((users) => res.json(users))
      .catch((err) => res.status(422).json(err));
  },

  findAllDms: function (req, res) {
    db.User.find({ isDm: true })
            .then((dms) => res.json(dms))
            .catch((err) => res.json(err));
    
  },

  findById: function (req, res) {
    console.log(req.params.id);
    db.User.findById({ _id: req.params.id })
      .then((user) => res.json(user))
      .catch((err) => res.json(err));
  },

  createUser: function (req, res) {
    db.User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.json(err));
  },

  // Authentication would go here

  updateField: function (req, res) {
    // console.log("route hit")
    console.log(req.body);
    db.User.updateOne({ _id: req.params.id }, req.body)
      .then((user) => res.json(user))
      .catch((err) => res.json(err));
  },

  remove: function (req, res) {
    db.User.findById({ _id: req.params.id })
      .then((dbUser) => dbUser.remove())
      .then((dbUser) => res.json(dbUser))
      .catch((err) => res.status(422).json(err));
  },
};
