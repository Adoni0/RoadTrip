const router = require('express').Router();
const tripsController = require('../../controllers/tripsController');

router.route('/')
  .get(tripsController.findAllTripsByDestination)
  .post(tripsController.create);

router.route('/:id')
  .get(tripsController.findTrip)
  .put(tripsController.update)
  .delete(tripsController.remove);


module.exports = router;