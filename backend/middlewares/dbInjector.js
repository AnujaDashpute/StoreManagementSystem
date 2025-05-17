const db = require('../models'); // this includes all models via your Sequelize setup

module.exports = (req, res, next) => {
  req.db = db;
  next();
};
