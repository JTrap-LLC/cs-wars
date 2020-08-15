const db = require('../models/csWarsModels'); // (text, params, callback)

const userController = {};

//======= GET USER ========//
userController.getUser = async (req, res, next) => {
  console.log('Reached getUser in userController')
  const name = req.params

  try {
    // this should probably be an id, not first name
    const data = await db.query(`SELECT users.firstName FROM "users"`);

    res.send(data) // not sure what to do with this

    next();
  } catch(err) { next(err) }
};

//======= GET USERS ========//
userController.getUsers = async (req, res, next) => {
  console.log('Reached getUsers in userController')

  try {
    const data = await db.query(`SELECT * FROM "users"`);
    
    res.send(data)
    next();
  } catch(err) { next(err) }
};

//======= CREATE USER ========//
userController.createUser = async (req, res, next) => {
  console.log('Reached createUser in userController')

    const { firstName, lastName, cwUsername } = req.body;
    const string = `
      INSERT INTO users (firstName, lastName, cwUsername)
      VALUES ($1, $2, $3)
    `;
    const values = [
      firstName, lastName, cwUsername
    ];

    try {
    const response = await db.query(string, values)
    console.log(response)
    // not sure what to do with this repsonse
    next()

  } catch(err) { next(err) }
};

module.exports = userController;