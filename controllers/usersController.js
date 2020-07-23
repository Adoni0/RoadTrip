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
  },
  findOneAndUpdate: function(req, res) {
    console.log('user: ' + JSON.stringify(req.body));

    db.User.findOneAndUpdate({ email: req.body.email }, req.body, { upsert: true, new: true })
      .then((user) => {
        console.log(user);
        res.status(200).send(user)
      }).catch((err) => {
        res.status(401).send('email or username already in use')
      });
  }
}