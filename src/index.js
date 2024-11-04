require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app'); // Import the Express app

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI; // Remote URI from .env file

// Connect to MongoDB
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, '0.0.0.0', () => {  // Change 'localhost' to '0.0.0.0'
      console.log(`Server running on http://0.0.0.0:${PORT}`);
    });
  })
  .catch(error => {
    console.error('Database connection error:', error);
  });

