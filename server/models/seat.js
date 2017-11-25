const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const seatSchema = new Schema({
  seat: { type: Number, required: true },
  name: { type: String, required: true },
});

const Seat = mongoose.model('Seat', seatSchema);
module.exports = Seat;