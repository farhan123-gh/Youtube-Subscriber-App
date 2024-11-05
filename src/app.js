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


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.use(express.static(path.join(__dirname, 'public')));


app.use((req, res, next) => {
  res.status(404).json({ error: "Route not found" });
});


// Export app for use in index.js
module.exports = app;