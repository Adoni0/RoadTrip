const router = require('express').Router();
const usersController = require('../../controllers/usersController');

router.route('/:id')
  .get(usersController.findAllTrips);

module.exports = router;