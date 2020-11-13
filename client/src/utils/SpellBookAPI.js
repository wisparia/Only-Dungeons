import axios from "axios";

export default {
      //Gets the class information from the DnD API
  getDndClasses: function (query){
    return axios.get(`https://www.dnd5eapi.co/api/classes/`)
  },

  getDndMonsters: function() {
  return axios.get(`https://www.dnd5eapi.co/api/monsters`)
  },

  getDndRaces: function() {
  return axios.get(`https://www.dnd5eapi.co/api/races`)
  },

  getDndClasses: function()  {
    return axios.get(`https://www.dnd5eapi.co/api/classes`)
  },

  getDndEquipment: function()  {
    return axios.get(`https://www.dnd5eapi.co/api/equipment-categories`)
  },

  getDndSpells: function()  {
    return axios.get(`https://www.dnd5eapi.co/api/spells`)
  },

  getDndArmor: function() {
    return axios.get(`https://www.dnd5eapi.co/api/equipment-categories/armor`)
  },

  getDndWeapon: function() {
    return axios.get(`https://www.dnd5eapi.co/api/equipment-categories/weapon`)
  },

  getDndRules: function() {
    return axios.get(`https://www.dnd5eapi.co/api/rules`)
  }


  // weapons
  // armor
  // rules
}


