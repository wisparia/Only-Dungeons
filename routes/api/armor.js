const router = require("express").Router();
const armorController = require("../../controllers/armorcontroller");

router.route("/").get(armorController.getAllArmor);

module.exports = router;