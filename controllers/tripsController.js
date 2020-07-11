const db = require('../models');

module.exports = {
  findAllTrips: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  findTrip: function(req, res) {
    db.Trip
      .findById({ _id: req.params.id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  create: function(req, res) {
    db.Trip
      .create(req.body)
      .then(dbModel => req.json(dbModel))
      .catch(err => res.json(err));
  }
}