'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
require('dotenv').config();

const basename = path.basename(__filename);
const db = {};

// Setup Sequelize connection using environment variables
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    logging: false, // optional: disables SQL logging
  }
);

// Read all model files and import them dynamically
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && 
           (file !== basename) && 
           (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

// Apply model associations if any
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }

  sequelize.authenticate()
  .then(() => {
    console.log('PostgreSQL connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the PostgreSQL database:', err);
  });


});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
