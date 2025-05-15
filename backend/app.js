require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { User } = require('./models'); // import User model from index.js

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Route to test DB connection and model
app.get('/test-db', async (req, res) => {
  try {
    const users = await User.findAll(); // Fetch all users
    res.json(users); // Return users as JSON
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ message: 'Failed to fetch users', error: err.message });
  }
});

module.exports = app;
