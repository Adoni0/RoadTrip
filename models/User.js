var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var UserSchema = new Schema ({
    name: {
        type: String,
        required: true
      },
      origin:{
        type: String,
        required: true
      },
      destination:{
        type: String,
        required: true
      },
      numberOfStops:{
          type: Number,
          required: true
      },
      //integer 1-3
      budget:{
        type: Number,
        min: 1,
        max:3,
        required: true
    }
});

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", UserSchema);

// Export the model
module.exports = User;