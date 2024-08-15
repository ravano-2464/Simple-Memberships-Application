const express = require('express');
const passport = require('passport');
require('dotenv').config();
require('./config/passport');

const authRoutes = require('./routes/auth');
const membershipRoutes = require('./routes/membership');

const app = express();
app.use(passport.initialize());

app.use('/auth', authRoutes);
app.use('/membership', membershipRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Membership API');
});

module.exports = app;