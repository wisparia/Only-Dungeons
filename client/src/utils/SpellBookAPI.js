import axios from "axios";

export default {
      //Gets the class information from the DnD API
  getDndInfo: function (query){
    return axios.get(`https://www.dnd5eapi.co/api/classes/${query}`)
  },

  // getDndLanguages: function (query1, query2) {
  //   return axios.get(`https://www.dnd5eapi.co/api/${query1}/${query2}`)
  // }
}