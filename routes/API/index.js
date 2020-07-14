const router = require("express").Router();
const path = require("path");

// const googleRoutes = require("./googleMaps");
const usersRoutes = require("./users");
const tripsRoutes = require("./trips");
const yelpRoutes = require("./yelp");

// Book routes
router.use("/users", usersRoutes);
router.use("/trips", tripsRoutes);
router.use("/yelp", yelpRoutes);


module.exports = router;
