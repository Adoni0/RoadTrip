const router = require('express').Router();
const tripsController = require('../../controllers/tripsController');

router.route('/')
  .post(tripsController.create);

router.route('/:id')
  .get(tripsController.findTrip);

// router.route('/:id')
//   .get(tripsController.findAllTrips);

module.exports = router;