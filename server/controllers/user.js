const User = require('./../models/user.js');

const userController = {
  verify: (req, res) => {
    User.findOne({ username: req.body.username }, (err, result) => {
      if (result === null) return res.status(200).send(false);
      else if (result.password !== req.body.password) return res.status(200).send(false);
      return res.status(200).send(result.wishlistStorage);
    });
  },
  create: (req, res) => {
    User.findOne({ username: req.body.username }, (err, result) => {
      if (result) return res.status(200).send(false);
      else if (req.body.username && req.body.password) {
        User.create({
          username: req.body.username,
          password: req.body.password,
          wishlistStorage: [],
        }, res.status(200).send(true));
      } else return res.status(200).send('Create Not Successful');
    });
  },
  manageWL: (req, res) => {
    User.findOne({ username: req.body.username }, (err, result) => {
      if (err) return (err);
        
        result.wishlistStorage = req.body.wishlistStorage;

        result.save((err3, updatedUser) => {
          if (err3) return (err3);
          console.log('success');
      });
    }, res.status(200).send(true));
  },
};

module.exports = userController;
