const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.get('/user/:name', userController.getUser, (req, res) => {
  res.status(200).send('Received GET request to /user:name');
})

// router.get('/users', userController.getUsers, (req, res) => {
//   res.status(200).send('Received GET request to /users');
// })

// router.post('/user/create', userController.createUser, (req, res) => {
//   res.status(200).send('Received POST request to /user');
// })

module.exports = router;