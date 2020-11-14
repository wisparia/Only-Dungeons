const router = require("express").Router();
const spellcontroller = require("../../controllers/spell");


// Matches api/spells
router.route("/").get(spellcontroller.getAll);

module.exports = router;
