const fetch = require('node-fetch');

const codewarsController = {};

//======= GET USER ========// returns the codewars all data based on CW-Username
codewarsController.getUser = (req, res, next) => {
  const id = res.locals.cwuser.cwusername;
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

//======= GET CHALLENGES ========//
// this gets the users last three completed algos from Code Wars.
// id is passed through the url
codewarsController.getChallenges = (req, res, next) => {
  const { id } = req.params;
  fetch(
    `https://www.codewars.com/api/v1/users/${id}/code-challenges/completed?page=0`
  )
    .then((resp) => resp.json())
    .then((resp) => {
      res.locals.challenges = [resp.data[0], resp.data[1], resp.data[2]];
      next();
    })
    .catch((err) => {
      next({
        log: err,
      });
    });
};

//======= CREATE USER ========// returns the codewars data based on CW-Username 
codewarsController.createUser = (req, res, next) => {
  const { cwUsername } = req.body; // req.body passes the firstname, lastname, cwusername, facebookid
  fetch(`https://www.codewars.com/api/v1/users/${cwUsername}`)
    .then((resp) => resp.json())
    .then((resp) => {
      req.body.rank = resp.ranks.overall.name; // add to req.body
      req.body.completed = resp.codeChallenges.totalCompleted; // add to req.body
      res.locals.createuser = req.body; // pass all the collected information into res.locals
      next();
    })
    .catch((err) => {
      next({
        log: err,
      });
    });
};


// WE DID NOT USE THIS BECAUSE ELEPHANTSQL DOES NOT ALLOW US TO MAKE TOO MANY QUERIES AT THE SAME TIME!
//======= GET USERS ========// NOT BEING USED -- returns the codewars data based on CW-Usernames
// codewarsController.getUsers = (req, res, next) => {
//   Promise.all(
//     res.locals.cwusernames.map((user) => {
//       let id = user.cwusername;
//       return fetch(`https://www.codewars.com/api/v1/users/${id}`).then((resp) =>
//         resp.json()
//       );
//     })
//   )
//     .then((resp) => {
//       res.locals.cwusersdata = resp;
//       next();
//     })
//     .catch((err) => {
//       next({ log: err });
//     });
// };

module.exports = codewarsController;
