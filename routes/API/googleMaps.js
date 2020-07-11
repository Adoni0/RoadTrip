var router = require('express').Router();
const projectController = require('../../controllers/projectController');


// routes to /api/distance
router.route('/').get(projectController.findDistance);


module.exports = router;