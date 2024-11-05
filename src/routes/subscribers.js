const express = require('express');
const Subscriber = require('../models/Subscriber');
const router = express.Router();


// GET all subscribers
router.get('/', async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.json(subscribers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET subscriber names and channels
router.get('/names', async (req, res) => {
  try {
    const subscribers = await Subscriber.find({}, 'name subscribedChannel');
    res.json(subscribers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET a subscriber by ID
router.get('/:id', async (req, res) => {
  try {
    const subscriber = await Subscriber.findById(req.params.id);
    if (!subscriber) {
      return res.status(400).json({ message: 'Subscriber not found' });
    }
    res.json(subscriber);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;