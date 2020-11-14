const router = require("express").Router();
const spellcontroller = require("../../controllers/spellcontroller");


// Matches /spells
router.route("/").get(spellcontroller.getAll);

module.exports = router;
