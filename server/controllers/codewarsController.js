//const db = require('../models/csWarsModels'); // (text, params, callback)
const fetch = require('node-fetch');

const codewarsController = {};

// ========= DATABASE INFO ========= //
// TABLE: "users"
// COLUMNS: "firstName", "lastName", "cwUsername"

//======= GET USER ========//
// returns the codewars all data based on CW-Username
codewarsController.getUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    // const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; // this needs to move to the back end
    const targetUrl = `https://www.codewars.com/api/v1/users/${id}`; //move to back end
    fetch(targetUrl) // need to get from login
      //fetch('https://image-server-codesmith.firebaseapp.com/images')
      .then((resp) => resp.json())
      .then((resp) => {
        console.log('THIS IS THE RESULT from API: ', resp);
        res.locals.user = resp;
        next();
      });
  } catch (err) {
    next({
      log: err,
    });
  }
};

module.exports = codewarsController;
