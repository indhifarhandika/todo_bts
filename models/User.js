const db = require('../config/db');
const bcrypt = require('bcryptjs');

class User {
  static async createUser(username, email, password) {
    console.log(username, email, password)
    const hashedPassword = await bcrypt.hash(password, 10);
    return db('users').insert({ username, email, password: hashedPassword });
  }

  static async findByUsername(username) {
    return db('users').where({ username }).first();
  }
}

module.exports = User;
