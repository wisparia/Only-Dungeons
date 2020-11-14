const db = require("../models");
// const jwt = require("jsonwebtoken");

// Defining methods for the booksController
module.exports = {
  findAll: function (req, res) {
    db.User.find({})
      .then((users) => res.json(users))
      .catch((err) => res.status(422).json(err));
  },

  findAllDms: function (req, res) {
    db.User.find({ isDm: true })
      .then((dms) => {
        const filteredDms = dms.map((dm)=>{
          return {
            _id: dm._id,
            userName: dm.userName,
            isDm: dm.isDm,
            email: dm.email,
            roomName: dm.roomName,
            tagLine: dm.tagLine,
            categoryType: {
              byTheBook: dm.categoryType.byTheBook,
              campaigns: dm.categoryType.campaigns,
              norestriction: dm.categoryType.norestriction,
              homebrew: dm.categoryType.homebrew,
              lvl1only: dm.categoryType.lvl1only,
              rpersonly: dm.categoryType.rpersonly,
              oneshots: dm.categoryType.oneshots,
              displaydice: dm.categoryType.displaydice,
              voyuerallowed: dm.categoryType.voyuerallowed,
            },
            availability:{
              monday: dm.availability.monday,
              tuesday: dm.availability.tuesday,
              wednesday: dm.availability.wednesday,
              thursday: dm.availability.thursday,
              friday: dm.availability.friday,
              saturday: dm.availability.saturday,
              sunday: dm.availability.sunday,
            },
            preferredRole: dm.preferredRole,
            discordServer: dm.discordServer,
            getSpotify: dm.getSpotify
          }
        })
        res.json(filteredDms)})
      .catch((err) => res.json(err));
  },

  findAllPcs: function (req, res) {
    db.User.find({ isDm: false })
      .then((pcs) => res.json(pcs))
      .catch((err) => res.json(err));
  },

  findById: function (req, res) {
    console.log(req.params.id);
    db.User.findById({ _id: req.params.id })
      .then((user) =>{ 
      if(user.isDm){
        res.json({
        userName: user.userName,
        isDm: user.isDm,
        email: user.email,
        roomName: user.roomName,
        tagLine: user.tagLine,
        categoryType: {
          byTheBook: user.categoryType.byTheBook,
          campaigns: user.categoryType.campaigns,
          norestriction: user.categoryType.norestriction,
          homebrew: user.categoryType.homebrew,
          lvl1only: user.categoryType.lvl1only,
          rpersonly: user.categoryType.rpersonly,
          oneshots: user.categoryType.oneshots,
          displaydice: user.categoryType.displaydice,
          voyuerallowed: user.categoryType.voyuerallowed,
        },
        availability:{
          monday: user.availability.monday,
          tuesday: user.availability.tuesday,
          wednesday: user.availability.wednesday,
          thursday: user.availability.thursday,
          friday: user.availability.friday,
          saturday: user.availability.saturday,
          sunday: user.availability.sunday,
        },
        preferredRole: user.preferredRole,
        discordServer: user.discordServer,
        getSpotify: user.getSpotify
      })}
      else{
        res.json({
        userName: user.userName,
        isDm: user.isDm,
        roomName: user.roomName,
        tagLine: user.tagLine,
        categoryType: {
          byTheBook: user.categoryType.byTheBook,
          campaigns: user.categoryType.campaigns,
          norestriction: user.categoryType.norestriction,
          homebrew: user.categoryType.homebrew,
          lvl1only: user.categoryType.lvl1only,
          rpersonly: user.categoryType.rpersonly,
          oneshots: user.categoryType.oneshots,
          displaydice: user.categoryType.displaydice,
          voyuerallowed: user.categoryType.voyuerallowed,
        },
        availability:{
          monday: user.availability.monday,
          tuesday: user.availability.tuesday,
          wednesday: user.availability.wednesday,
          thursday: user.availability.thursday,
          friday: user.availability.friday,
          saturday: user.availability.saturday,
          sunday: user.availability.sunday,
        },
        preferredRole: user.preferredRole,
        discordServer: user.discordServer,
        getSpotify: user.getSpotify
        })
      }
    })
      .catch((err) => res.json(err));
  },

  createUser: function (req, res) {
    db.User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.json(err));
  },

  // Authentication would go here

  updateField: function (req, res) {
    console.log(req.body);
    db.User.updateOne({ _id: req.user._id }, req.body)
      .then((user) => res.json(user))
      .catch((err) => res.json(err));
  },

  remove: function (req, res) {
    db.User.findById({ _id: req.user._id })
      .then((dbUser) => dbUser.remove())
      .then((dbUser) => res.json(dbUser))
      .catch((err) => res.status(422).json(err));
  },
};
