const router = require('express').Router();
const usersController = require('../../controllers/usersController');

const { route } = require('./trips');

router.route('/:id')
  .get(usersController.findAllTrips);

router.route('/login')
  .post(usersController.findOneAndUpdate);

// router.post('/login')

router
.route("/:id")
.get(usersController.findById)
.delete(usersController.remove);

module.exports = router;

