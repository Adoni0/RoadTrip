const db = require('../models');

module.exports = {
  findAllTripsByDestination: function(req, res) {
    const destination = req.query.destination
    const destinationReg = new RegExp(destination, 'i');
    console.log('tripController req.query:');
    console.log(req.query);
    console.log('tripController destination:' + destination);
    db.Trip
      .find({ name: destinationReg })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  findTrip: function(req, res) {
    db.Trip
      .findById({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  // Saving/updating an User's associated Trip
  create: function(req, res) {
    // Save the new trip that gets posted to the Trips collection
    // then find a user from the req.params.id
    // and update it's "trips" property with the _id of the new trip
    db.Trip
      .create(req.body)
      .then(dbTrip => {
        return db.User.findOneAndUpdate(
          {
            _id: dbTrip.userId
          },
          {
            $push: {
              trips: dbTrip._id
            }
          },
          {
            new: true
          }
        )
      })
      // If we were able to successfully update a User, send it back to the client
      .then(dbUser => res.json(dbUser))
      .catch(err => res.json(err));
  },
  update: function(req, res) {
    db.Trip
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  remove: function(req, res) {
    db.Trip
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err))
  }
}