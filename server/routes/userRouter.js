const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.get('/user/:id', userController.getUser, (req, res) => {
  res.status(200).send(res.locals.user);
});

router.get('/users', userController.getUsers, (req, res) => {
  res.status(200).send(res.locals.users);
});

router.post('/user/create', userController.createUser, (req, res) => {
  res.status(200).send(res.locals.userinfo);
});

module.exports = router;
