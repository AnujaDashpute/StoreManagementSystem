const express = require('express');
const cors = require('cors');
require('dotenv').config();

const dbInjector = require('./middlewares/dbInjector');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(dbInjector); // inject Sequelize models into req.db
app.use('/api/auth', authRoutes);


// Example route

module.exports = app;
