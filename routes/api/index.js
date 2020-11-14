const router = require("express").Router();
const userRoutes = require("./users");
const authRoutes = require("./auth");
const monsterRoutes = require("./monster");
const spellRoutes = require("./spells")

// User routes
router.use("/users", userRoutes);
router.use("/auth", authRoutes);
router.use("/monsters", monsterRoutes);
router.use("/spells", spellRoutes)

module.exports = router;
