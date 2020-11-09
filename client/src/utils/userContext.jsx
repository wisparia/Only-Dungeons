import React from "react";

const UserContext = React.createContext({
  userName: "",
  password: "",
  email: "",
  isDm: false,
  roomName: "",
  tagLine: "",
  categoryType: {
    byTheBook: false,
    campaigns: false,
    norestriction: false,
    homebrew: false,
    lvl1only: false,
    rpersonly: false,
    oneshots: false,
    displaydice: false,
    voyuerallowed: false,
  },
  availability: {
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
  },
  preferredRole: "",
});

export default UserContext