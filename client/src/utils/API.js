/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
  // Gets all books
  getUsers: function () {
    return axios.get("/api/users");
  },
  getDms: function () {
    return axios.get("/api/users/dms");
  },
  // Gets the book with the given id
  getUser: function (id) {
    return axios.get("/api/users/" + id);
  },
  // Deletes the book with the given id
  deleteUser: function (id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a book to the database
  saveUser: function (userData) {
    console.log(userData)
    return axios.post("/api/users", userData);
  },
  updateUser: function (id) {
    return axios.put("/api/users" + id);
  },
};
