const router = require("express").Router();
const tripsRoutes = require("./trips");

// Book routes
router.use("/trips", tripsRoutes);

module.exports = router;
