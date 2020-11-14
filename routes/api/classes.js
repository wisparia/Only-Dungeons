const router = require("express").Router();
const classesController = require("../../controllers/classesController");

router.route("/").get(classesController.getAllClasses);

module.exports = router;