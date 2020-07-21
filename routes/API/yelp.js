const router = require("express").Router();
const yelpController = require("../../controllers/yelpController");

router.get("/businesses/:location", yelpController.getBusinesses);

module.exports = router;