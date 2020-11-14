const axios = require("axios");

module.exports = {
  getAllWpn: async (req, res) => {
   
    const wpn = await axios.get(
      "https://spellbookweapondndapi.herokuapp.com/weaponNames"
    );
    // console.log(race.data)
    res.json({ data: wpn.data });
  },
};
