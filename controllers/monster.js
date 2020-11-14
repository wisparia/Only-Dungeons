const axios = require("axios");

module.exports = {
  getAll: async (req, res) => {
    const monsters = await axios.get(
      "https://dndmonsterdirectory.herokuapp.com/monsternames"
    );
    res.json({ data: monsters.data });
  },
};
