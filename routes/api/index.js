const router = require("express").Router();
const userRoutes = require("./users");
const authRoutes = require("./auth");
const monsterRoutes = require("./monster");

// User routes
router.use("/users", userRoutes);
router.use("/auth", authRoutes);
router.use("/monsters", monsterRoutes);

module.exports = router;
