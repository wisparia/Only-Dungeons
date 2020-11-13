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

  getDndSpecificSpells: function(query)  {
    return axios.get(`https://www.dnd5eapi.co/api/spells/${query}`)
    // .desc[0] // .higher_level[0] // .range // .material // .ritual // .duration // .concentration //  
  },

  getDndArmor: function() {
    return axios.get(`https://www.dnd5eapi.co/api/equipment-categories/armor`)
  },
 
  getSpecificArmor: function(query) {
    return axios.get(`https://www.dnd5eapi.co/api/equipment/${query}`)
// .armor_category // armor_class.base // armor_class.dex_bonus // armor_class.max_bonus
  },

  getDndWeapon: function() {
    return axios.get(`https://www.dnd5eapi.co/api/equipment-categories/weapon`)
  },

  getSpecificWeapon: function(query) {
    return axios.get(`https://www.dnd5eapi.co/api/equipment/${query}`)
// .weapon_category // .weapon_range // .damage.damage_dice // .damage.damage_type.name  
  },

  getDndRules: function() {
    return axios.get(`https://www.dnd5eapi.co/api/rules`)
  },

  getSpecificRules: function(query) {
    return axios.get(`https://www.dnd5eapi.co/api/rules${query}`)
// subsection targetting, GOOD LUCK
  }
}


