const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: {
    type: String,
    validate: [
      ({ length }) => length >= 8 && length <= 24,
      "Username should be greater than 8 or less than 24 characters.",
    ],
    unique: true,
    trim: true,
    required: "Please enter a username",
  },
  password: {
    type: String,
    validate: [
      ({ length }) => length >= 8 && length <= 36,
      "Password should be greater than 8 or less than 36 characters.",
    ],
    trim: true,
    require: "Please enter a password",
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    require: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
  },
  isDm: {
    type: Boolean,
    // required: "Please select a role",
    default: false,
  },
  roomName: {
    type: String,
    trim: true,
    validate: [
      ({ length }) => length >= 8 && length <= 36,
      "Room name should be greater than 8 or less than 36 characters.",
    ],
    // required: "Please enter a name for the room",
    unique: true
  },
  tagLine: {
    type: String,
    trim: true,
    validate: [
      ({ length }) => length <= 25,
      "Tagline must be less than 25 characters.",
    ],
  },
  categoryType: 
    {
      byTheBook: { type: Boolean, default: false},
      campaigns: { type: Boolean, default: false},
      norestriction: { type: Boolean, default: false},
      homebrew: { type: Boolean, default: false},
      lvl1only: { type: Boolean, default: false},
      rpersonly: { type: Boolean, default: false},
      oneshots: { type: Boolean, default: false},
      displaydice: { type: Boolean, default: false},
      voyuerallowed: { type: Boolean, default: false},
    },
  availability: 
    {
      monday: { type: Boolean, default: false},
      tuesday: { type: Boolean, default: false},
      wednesday: { type: Boolean, default: false},
      thursay: { type: Boolean, default: false},
      friday: { type: Boolean, default: false},
      saturday: { type: Boolean, default: false},
      sunday: { type: Boolean, default: false},
    },
  // we hard-code the values in a drop-down on the front end. Then we can access asset files
  preferredRole:{
    type: String,
    trim: true,
    // required: true,
  },
    
});

const User = mongoose.model("User", userSchema);
module.exports = User;
