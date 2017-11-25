const inventory = require('./../data/theater');

const Item = require('./../models/seat');
const itemController = require('./../controllers/seat');

const dataManager = {
  post: (req, res, next) => {
    Item.findOne({ seat: 1 }, (err, result) => {
      if (result) return;
      for (let i = 0; i < theater.length; i += 1) {
        const data = {
          seat: theater[i].seat,
          ticketHolder: theater[i].ticketHolder,
        };
        seatController.create(data);
      }
    });
    next();
  },
};

module.exports = dataManager;
