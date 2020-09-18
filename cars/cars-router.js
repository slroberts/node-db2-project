const express = require('express');

const db = require('../data/db-config.js');

const router = express.Router();

//POST /api/cars
router.post('/', async (req, res) => {
  const newCar = req.body;

  try {
    const car = await db.insert(newCar).into('cars');
    res.status(201).json({
      message: 'New car created',
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'db problem',
      err,
    });
  }
});

router.get('/', async (req, res) => {
  try {
    const cars = await db('cars');
    res.json(cars);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Error retrieving cars',
      err,
    });
  }
});

module.exports = router;
