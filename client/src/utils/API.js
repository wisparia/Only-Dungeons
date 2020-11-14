/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
  getMonsters: function () {
    return axios.get("/api/monsters");
  },

  getSpells: function (){
    return axios.get("/api/spells")
  
  },
  
  getRace: function (){
    return axios.get("/api/race")
  },

  getClass: function (){
    return axios.get("/api/classes")
  },

  // Gets all books
  getUsers: function () {
    return axios.get("/api/users");
  },
  getDms: function () {
    return axios.get("/api/users/dms");
  },

  // Gets the user with the given id
  getUser: function (userId) {
    return axios.get(`/api/users/${userId}`);
  },

  // Deletes the user with the given id
  deleteUser: function (userId) {
    return axios.delete(`/api/users/${userId}`);
  },

  // Saves a user to the database
  saveUser: function (userData) {
    return axios.post("/api/auth/signUp", userData);
  },

  // Allows the user to login w Authentication
  loginUser: function (userData) {
    return axios.post("/api/auth/login", userData);
  },

  // Updates a user in the database
  updateUser: function (id, userData) {
    return axios.put("/api/users/" + id, userData);
  },
};
