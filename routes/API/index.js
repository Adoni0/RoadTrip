const router = require("express").Router();
const path = require("path");
// const googleRoutes = require("./googleMaps");
const tripsRoutes = require("./trips");


// Book routes
router.use("/trips", tripsRoutes);

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
  });

module.exports = router;
