require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app'); // Import the Express app

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI; // Remote URI from .env file

// Connect to MongoDB
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch(error => {
    console.error('Database connection error:', error);
  });
