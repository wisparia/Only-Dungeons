const router = require("express").Router();
const raceController = require("../../controllers/racecontroller");

router.route("/").get(raceController.getAllRace);

module.exports = router;
