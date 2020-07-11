const router = require("express").Router();
const path = require("path");

// const googleRoutes = require("./googleMaps");
const tripsRoutes = require("./trips");
const yelpRoutes = require("./yelp");

// Book routes
router.use("/trips", tripsRoutes);
router.use("/yelp", yelpRoutes);


module.exports = router;
