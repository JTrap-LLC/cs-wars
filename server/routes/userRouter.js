const express = require('express');
const userController = require('../controllers/userController');
const codewarsController = require('../controllers/codewarsController');
const router = express.Router();

router.get(
  '/user/:id',
  codewarsController.getUser, // returns codewars user data
  userController.updateUser, // update sql db with codewars user data
  (req, res) => {
    res.status(200).send(res.locals.userSQL);
  }
);

router.get(
  '/users',
  userController.getUsers, // returns array of cw-username from db
  // codewarsController.getUsers, // get codewars data from api
  // userController.updateUsers, // update db with codewars data
  (req, res) => {
    res.status(200).send(res.locals.cwusernames);
  }
);

router.post(
  '/user/create',
  // userController.userDoesntExist,
  codewarsController.createUser,
  userController.createUser,
  (req, res) => {
    res.status(200).send(res.locals.userinfo);
  }
);

module.exports = router;
