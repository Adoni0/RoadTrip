const router = require('express').Router();
const tripsController = require('../../controllers/tripsController');

router.route('/')
  .post(tripsController.create);

router.route('/:id')
  .get(tripsController.findTrip);



module.exports = router;