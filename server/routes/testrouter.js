const express = require('express');
const testcontroller = require('../controllers/testcontroller');
const router = express.Router();

router.get('/', testcontroller.getTest, (req, res) => {
  res.status(200).send('Received GET request');
})

router.put('/', testcontroller.putTest, (req, res) => {
  res.status(200).send('Received PUT request');
})

router.post('/', testcontroller.postTest, (req, res) => {
  res.status(200).send('Received POST request');
})

router.delete('/', testcontroller.deleteTest, (req, res) => {
  res.status(200).send('Received DELETE request');
})

module.exports = router;