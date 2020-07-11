const router = require("express").Router();
const yelpController = require("../../controllers/yelpController");

router.get("/", yelpController.getYelpAPI);

module.exports = router;