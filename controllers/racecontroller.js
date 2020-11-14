const axios = require("axios");

module.exports = {
  getAllRace: async (req, res) => {
   
    const race = await axios.get(
      "http://spellbookracesdnd.herokuapp.com/raceNames"
    );
    // console.log(race.data)
    res.json({ data: race.data });
  },
};
