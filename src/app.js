const express = require('express');
const app = express();
const subscribersRouter = require('./routes/subscribers');
const cors = require('cors');

app.use(cors());

// Middleware
app.use(express.json());

// Routes
app.use('/subscribers', subscribersRouter);


// Export app for use in index.js
module.exports = app;
