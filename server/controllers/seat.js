const Seat = require('./../models/seat');

const seatController = {
  create: (req, res) => {
    Item.findOne({ seat: req.seat }, (err, result) => {
      if (result) return res.status(200).send(false);
      else if (req.seat && req.name) {
        Item.create({
          seat: req.seat,
          name: req.name,
        });
      } else return res.status(200).send(false);
    });
  },
  
  get: (req, res) => {
    const query = Seat.find({}).sort({ seat: 1 });
    query.exec((err, items) => {
      if (err) res.send(err);
      return res.send(items);
    });
  },
}

module.exports = seatController;
