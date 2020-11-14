const axios = require("axios");

module.exports = {
  getAllClasses: async (req, res) => {
   
    const race = await axios.get(
      "https://spellbookclassesdnd.herokuapp.com/classNames"
    );
    // console.log(race.data)
    res.json({ data: race.data });
  },
};
