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

//GET /api/cars
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

//GET /api/cars/:id

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const car = await db.select('*').from('cars').where({ id }).first();
    car
      ? res.status(200).json(car)
      : res.status(400).json({ message: 'car not found' });
  } catch (err) {
    res.status(500).json({ message: 'error retrieving car', err });
  }
});

//PUT /api/cars/:id
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  try {
    const update = await db('cars').where({ id }).update(changes);

    update
      ? res.status(200).json({ message: 'car updated' })
      : res.status(404).json({ message: 'invalid id' });
  } catch (err) {
    res.status(500).json({ message: 'db problem', err });
  }
});

//DELETE /api/cars/:id
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const count = await db.del().from('cars').where({ id });
    count
      ? res.status(200).json({ message: 'car deleted' })
      : res.status(404).json({ message: 'invslid id' });
  } catch (err) {
    res.status(500).json({ message: 'database error', err });
  }
});

module.exports = router;
