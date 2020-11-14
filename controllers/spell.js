const axios = require("axios");

module.exports = {
  getAll: async (req, res) => {
    const spells = await axios.get(
      "https://dndmonsterdirectory.herokuapp.com/SpellNames"
    );
    res.json({ data: spells.data });
  },
};
