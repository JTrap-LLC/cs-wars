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

// router.get(
//   '/users',
//   userController.getUsers,
//   codewarsController.getUsers,
//   userController.updateUsers,
//   (req, res) => {
//     res.status(200).send(res.locals.users);
//   }
// );

// router.post(
//   '/user/create',
//   codewarsController.getUser,
//   userController.createUser,
//   (req, res) => {
//     res.status(200).send(res.locals.userinfo);
//   }
// );

module.exports = router;
