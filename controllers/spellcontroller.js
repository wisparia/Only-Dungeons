const axios = require("axios");

module.exports = {
  getAll: async (req, res) => {
    const spells = await axios.get(
      "https://dndspelldirectory.herokuapp.com/SpellNames"
    );
   
    res.json( spells.data.results);
  },
};
