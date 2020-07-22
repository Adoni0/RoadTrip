const router = require('express').Router();
const usersController = require('../../controllers/usersController');
const passport = require("passport");
const { route } = require('./trips');

router.route('/:id')
  .get(usersController.findAllTrips);

router.route('/register')
  .post(usersController.create);

router.route('/logout')
    .post(usersController.logout);

router.post('/login', function(req, res, next){
  passport.authenticate("local", function(err, user){
      if(err){return next(err)}
      if(!user){
        console.log("User not found");
        return "User not found";
      }
      res.login(user, function(err){
        if(err){return next(err)}
        return res.json(user);
      })
  })(req, res, next)
})

function userAuthenticated(req, res, next){
  if(req.isAuthenticated()){
    next();
  }
  else{
    res.status(401);
  }
}

router.get("/home", userAuthenticated, function(req, res, next){
  res.json({user: req.user, loggedIn: true});
});

router
.route("/:id")
.get(usersController.findById)
.delete(usersController.remove);

module.exports = router;

