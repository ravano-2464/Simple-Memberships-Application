const pool = require('../config/db');

const User = {
  findByEmail: async (email) => {
    const res = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    return res.rows[0];
  },
  create: async (name, email, password, membershipType) => {
    const res = await pool.query(
      'INSERT INTO users (name, email, password, membership_type) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, email, password, membershipType]
    );
    return res.rows[0];
  }
};

module.exports = User;