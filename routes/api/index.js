const router = require("express").Router();
const userRoutes = require("./users");
const authRoutes = require("./auth");
const monsterRoutes = require("./monster");
const raceRoutes = require("./race")

// User routes
router.use("/users", userRoutes);
router.use("/auth", authRoutes);
router.use("/monsters", monsterRoutes);
router.use("/race", raceRoutes)

module.exports = router;
