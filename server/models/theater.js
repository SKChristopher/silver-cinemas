const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const theaterSchema = new Schema({
  name: { type: String, required: true },
  seats: { type: Array, required: true },
});

const Theater = mongoose.model('Theater', theaterSchema);
module.exports = Theater;
