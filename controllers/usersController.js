const db = require('../models');

module.exports = {
  findAllTrips: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      // .sort({ date: -1 })
      .populate('trips')
      .then(dbModel => res.json(dbModel))
      .catch(err => res.json(err));
  },
  create: function(req, res) {
    db.User
      .create(req.body)
      .then(dbModel => req.json(dbModel))
      .catch(err => res.json(err));
  }
}