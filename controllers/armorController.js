const axios = require("axios");

module.exports = {
  getAllArmor: async (req, res) => {
   
    const armor = await axios.get(
      "https://spellbookarmordndapi.herokuapp.com/armorNames"
    );
    // console.log(race.data)
    res.json({ data: armor.data });
  },
};
