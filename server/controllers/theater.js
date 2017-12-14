const Theater = require('./../models/theater.js');

const theaterController = {
  create: (req, res) => {
    Theater.create({
      name: req.body.name,
      seats: req.body.seats,
    }, res.status(200).send(true));
  },

  update: (req, res) => {
    Theater.findOne({ name: req.body.name }, (err, result) => {
      if (err) return (err);

      result.seats = req.body.seats;

      result.save((err, updatedUser) => {
        if (err) return (err);
        console.log('successful seat update');
      });
    }, res.status(200).send(true));
  },

  get: (req, res) => {
    const query = Theater.find({});
    query.exec((err, theaters) => {
      if (err) res.send(err);
      return res.send(theaters);
    });
  },
};

module.exports = theaterController;
