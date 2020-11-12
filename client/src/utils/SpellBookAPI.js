import axios from "axios";

export default {
      //Gets the class information from the DnD API
  getDndInfo: function (query){
    return axios.get(`https://www.dnd5eapi.co/api/classes/rogue`)
  }
}