const router = require("express").Router();
const wpnController = require("../../controllers/wpnController");

router.route("/").get(wpnController.getAllWpn);

module.exports = router;