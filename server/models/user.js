const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://chris:123@ds151993.mlab.com:51993/silver-cinemas', (err) => {
  if (err) return console.error(err);
  console.log('connected to mLabs remote');
});

const userSchema = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  wishlistStorage: { type: Object },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
