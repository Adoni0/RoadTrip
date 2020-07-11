const router = require("express").Router();
const tripsRoutes = require("./trips");

// Book routes
router.use("/trips", tripsRoutes);
const path = require("path");
const socketio = require("./socketio");
const googleRoutes = require("./googleMaps");


// router.use("/socket", socketio);
router.use("/distance", googleRoutes);

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
  });

module.exports = router;
