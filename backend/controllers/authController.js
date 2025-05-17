// controllers/authController.js
const bcrypt = require('bcrypt');
const { users } = require('../models'); // Adjust the path as needed

const signup = async (req, res) => {
  try {
    const { name, email, password, address, role } = req.body;

    // Check if the user already exists
    const existingUser = await users.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ message: 'Email already in use.' });
    }

    // Hash the password with a salt
    const saltRounds = 10; // You can adjust the cost factor as needed
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create the new user
    const newUser = await users.create({
      name,
      email,
      password: hashedPassword,
      address,
      role: role || 'customer', // Default role is 'customer'
    });

    // Respond with the created user's details (excluding the password)
    return res.status(201).json({
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      address: newUser.address,
      role: newUser.role,
      created_at: newUser.created_at,
    });
  } catch (error) {
    console.error('Signup Error:', error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
};



const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const user = await users.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Compare hashed passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Define redirect paths based on roles
    let redirectPath;
    switch (user.role) {
      case 'admin':
        redirectPath = '/admin/dashboard';
        break;
      case 'store_owner':
        redirectPath = '/store/dashboard';
        break;
      case 'customer':
      default:
        redirectPath = '/customer/dashboard';
        break;
    }

    // Respond with user info (excluding password) and redirect path
    return res.status(200).json({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      redirect: redirectPath,
    });
  } catch (error) {
    console.error('Login Error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};


module.exports = { signup,
    login,
 };
