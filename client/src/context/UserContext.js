import React from "react";

const UserContext = React.createContext({
  userId: "",
  setUserId: () => {},
});

export default UserContext;