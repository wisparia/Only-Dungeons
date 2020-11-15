const router = require("express").Router();

router.route("/").get(armorController.getAllArmor);

module.exports = router;