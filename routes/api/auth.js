const router = require("express").Router();
const authController = require("../../controllers/authController");

// Matches with "/auth/signup"
router.route("/signUp")
.post(authController.signUp)

// Matches with "/auth/login"
// router.route("/login")
// .post(authController.)

module.exports = router;