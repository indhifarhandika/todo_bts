const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');

dotenv.config();

const register = async (req, res) => {
  const { username, email, password } = req.body;
  console.log(req.body)
  try {
    await User.createUser(username, email, password);
    res.status(201).send('User registered');
  } catch (error) {
    console.log(error)
    res.status(400).send('Error registering user');
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findByUsername(username);
  if (!user) return res.status(400).send('Cannot find user');

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(403).send('Incorrect password');

  const accessToken = jwt.sign({ id: user.id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '24h' });
  res.json({ accessToken });
};

module.exports = { register, login };
