//const db = require('../models/csWarsModels'); // (text, params, callback)
const fetch = require('node-fetch');

const codewarsController = {};

// ========= DATABASE INFO ========= //
// TABLE: "users"
// COLUMNS: "firstName", "lastName", "cwUsername"

//======= GET USER ========// returns the codewars all data based on CW-Username
codewarsController.getUser = (req, res, next) => {
  const { id } = req.params;
  fetch(`https://www.codewars.com/api/v1/users/${id}`)
    .then((resp) => resp.json())
    .then((resp) => {
      res.locals.user = resp;
      next();
    })
    .catch((err) => {
      next({
        log: err,
      });
    });
};

//======= GET USERS ========// returns the codewars data based on CW-Usernames
codewarsController.getUsers = (req, res, next) => {
  Promise.all(
    res.locals.cwusernames.map((user) => {
      let id = user.cwusername;
      return fetch(`https://www.codewars.com/api/v1/users/${id}`).then((resp) =>
        resp.json()
      );
    })
  )
    .then((resp) => {
      // console.log('THIS IS THE RESULT from PromiseAll: ', resp);
      res.locals.cwusersdata = resp;
      next();
    })
    .catch((err) => {
      next({ log: err });
    });
};

// //======= CREATE USER ========// returns the codewars data based on CW-Username
codewarsController.createUser = (req, res, next) => {
  const { cwUsername } = req.body;
  fetch(`https://www.codewars.com/api/v1/users/${cwUsername}`)
    .then((resp) => resp.json())
    .then((resp) => {
      req.body.rank = resp.ranks.overall.name;
      req.body.completed = resp.codeChallenges.totalCompleted;
      res.locals.createuser = req.body;
      console.log(res.locals.createuser);
      next();
    })
    .catch((err) => {
      next({
        log: err,
      });
    });
};

module.exports = codewarsController;
