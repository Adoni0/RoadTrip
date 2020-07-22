const db = require('../models');
const { User } = require('../models');

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
  },
  findById: function(req, res){
    db.User
    .findById({_id: req.params.id})
    .then(dbModel => req.json(dbModel))
    .catch(err => res.json(err));
  },
  remove: function(req, res){
    db.User
    .findById({_id: req.params.id})
    .then(dbModel => dbModel.remove())
    .then(dbModel => req.json(dbModel))
    .catch(err => res.json(err));
  },
  logout: function(req, res){
      req.logout();
      req.flash("success_msg", "Logout successful");
      res.redirect("/");
  }
}