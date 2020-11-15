const router = require("express").Router();
const armorController = require("../../controllers/armorController");

router.route("/").get(armorController.getAllArmor);

module.exports = router;