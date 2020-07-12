var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var TripSchema = new Schema ({
  tripName: {
    type: String,
    required: true,
    unique: true
  },
  origin: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  numberOfStops: {
      type: Number,
      required: true
  },
  //integer 1-3
  budget: {
    type: Number,
    min: 1,
    max:3,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// This creates our model from the above schema, using mongoose's model method
var Trip = mongoose.model("Trip", TripSchema);

// Export the model
module.exports = Trip;