const router = require("express").Router();
const monstercontroller = require("../../controllers/monster");

router.route("/").get(monstercontroller.getAll);

module.exports = router;
