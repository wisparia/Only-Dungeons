const router = require("express").Router();
const userRoutes = require("./users");
const authRoutes = require("./auth");
const monsterRoutes = require("./monster");
const raceRoutes = require("./race")
const classesRoutes = require("./classes")

// User routes
router.use("/users", userRoutes);
router.use("/auth", authRoutes);
router.use("/monsters", monsterRoutes);
router.use("/race", raceRoutes)
router.use("/classes", classesRoutes)

module.exports = router;
