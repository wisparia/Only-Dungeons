import axios from "axios";

export default {
      //Gets the class information from the DnD API
  getDndInfo: function (query){
    return axios.get(`https://www.dnd5eapi.co/api/classes`)
  },

  getDndMonsters: function(query) {
    return axios.get(`https://www.dnd5eapi.co/api/monsters`)
  },

  getDndRaces: function(query) {
    return axios.get(`https://www.dnd5eapi.co/api/races`)
  },

  getDndClasses: function(query)  {
    return axios.get(`https://www.dnd5eapi.co/api/classes`)
  }

  getDndEquipment: function(query)  {
    return axios.get(`https://www.dnd5eapi.co/api/equipment-categories`)
  }


}

