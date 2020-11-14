const router = require("express").Router();
const userRoutes = require("./users");
const authRoutes = require("./auth");
const monsterRoutes = require("./monster");
const spellRoutes = require("./spells")
const raceRoutes = require("./race")
const classesRoutes = require("./classes")
const wpnRoutes = require("./wpn")

// User routes
router.use("/users", userRoutes);
router.use("/auth", authRoutes);
router.use("/monsters", monsterRoutes);
router.use("/spells", spellRoutes)
router.use("/race", raceRoutes)
router.use("/classes", classesRoutes)
router.use("/wpn", wpnRoutes)

module.exports = router;
