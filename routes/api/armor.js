const router = require("express").Router();
armorController  = require("../../controllers/armorController")
router.route("/").get(armorController.getAllArmor);

module.exports = router;