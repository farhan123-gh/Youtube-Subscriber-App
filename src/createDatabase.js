const mongoose = require('mongoose');
const Subscriber = require('./models/Subscriber');
require('dotenv').config(); // Load environment variables from .env file

const MONGODB_URI = process.env.MONGODB_URI; // Use remote URI from .env file

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    createSubscribers();
  })
  .catch(error => {
    console.error('Database connection error:', error);
  });

async function createSubscribers() {
  try {
    const subscribers = [
      { name: 'John Doe', subscribedChannel: 'Tech World' },
      { name: 'Jane Doe', subscribedChannel: 'Cooking Tips' },
      { name: 'Alice Smith', subscribedChannel: 'Gaming Zone' },
      { name: 'Bob Johnson', subscribedChannel: 'Travel Diaries' },
      { name: 'Sara Lee', subscribedChannel: 'Music Hub' },
      { name: 'Michael Brown', subscribedChannel: 'Fitness Freaks' }
    ];
    
    await Subscriber.insertMany(subscribers);
    console.log('Subscribers added successfully');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error creating subscribers:', error);
  }
}
