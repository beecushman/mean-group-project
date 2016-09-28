// Require some packages that we will use
var mongoose = require('mongoose');

// Define our Barber schema
//
var BarberSchema = new mongoose.Schema({
  name: { type: String, require: true, index: { unique: true }},
  location: { type: String, require: true },
  phone: String,
  _appointments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' }]
});

// Create our Barber schema
mongoose.model('Barber', BarberSchema);
