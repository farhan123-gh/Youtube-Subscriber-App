const express = require('express');
const app = express();
const path = require('path');
const subscribersRouter = require('./routes/subscribers');
const cors = require('cors');

app.use(cors());

// Middleware
app.use(express.json());

// Routes
app.use('/subscribers', subscribersRouter);


app.use(express.static(path.join(__dirname, 'public')));

// Export app for use in index.js
module.exports = app;
