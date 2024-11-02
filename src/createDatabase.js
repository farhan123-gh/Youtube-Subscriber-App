const mongoose = require('mongoose');
const Subscriber = require('./models/Subscriber');

const MONGODB_URI = 'mongodb://127.0.0.1:27017/subscribersDB';

mongoose.connect(MONGODB_URI)
.then(() => {
  console.log('Connected to MongoDB');
  createSubscribers();
}).catch(error => {
  console.error('Database connection error:', error);
});

async function createSubscribers() {
  try {
    const subscribers = [
      { name: 'John Doe', subscribedChannel: 'Tech World' },
      { name: 'Jane Doe', subscribedChannel: 'Cooking Tips' },
      { name: 'Alice Smith', subscribedChannel: 'Gaming Zone' }
    ];
    
    await Subscriber.insertMany(subscribers);
    console.log('Subscribers added successfully');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error creating subscribers:', error);
  }
}
