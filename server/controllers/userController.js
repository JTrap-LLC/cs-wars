const db = require('../models/csWarsModels'); // (text, params, callback)

const userController = {};

// ========= DATABASE INFO ========= //
// TABLE: "users"
// COLUMNS: "firstName", "lastName", "cwUsername"

//======= GET USER ========//
// userController.getUser = async (req, res, next) => {
//   const { id } = req.params;
//   try {
//     console.log('try');
//     let queryString = `
//     SELECT *
//     FROM users
//     WHERE cwUsername = '${id}';
//     `;

//     const { rows } = await db.query(queryString);
//     console.log(rows);
//     res.locals.user = await rows[0];
//     next();
//   } catch (err) {
//     next({
//       log: 'Error thrown in get characters middleware',
//     });
//   }
// };

userController.updateUser = async (req, res, next) => {
  const cwUsername = res.locals.user.username;
  const rank = res.locals.user.ranks.overall.name;
  const completed = res.locals.user.codeChallenges.totalCompleted;
  try {
    let queryString = `
    UPDATE users 
    SET   rank='${rank}',   completed=${completed}
    WHERE cwUsername='${cwUsername}'
    RETURNING *;
    `;

    const { rows } = await db.query(queryString);
    console.log('update user middleware', rows);
    res.locals.userSQL = await rows[0];
    next();
  } catch (err) {
    next({
      log: 'Error thrown in get characters middleware',
    });
  }
};

// //======= GET USERS ========//
userController.getUsers = async (req, res, next) => {
  try {
    let queryString = `
    SELECT *
    FROM users;
    `;

    const { rows } = await db.query(queryString);
    res.locals.users = await rows;
    next();
  } catch (err) {
    next({
      log: 'Error thrown in get characters middleware',
    });
  }
};

// //======= CREATE USER ========//
userController.createUser = async (req, res, next) => {
  const { firstName, lastName, cwUsername } = req.body;
  const string = `
      INSERT INTO users
      VALUES ($1, $2, $3)
      RETURNING *
    `;

  // INSERT INTO users (firstName,lastName, cwUsername, rank,  completed  )
  // VALUES ('Alonso', 'Garza' , 'Alonsog66', '6 kyu', 24)
  // RETURNING *;

  const values = [firstName, lastName, cwUsername]; // can refactor this into VALUES

  try {
    const { rows } = await db.query(string, values);

    res.locals.userinfo = rows[0];

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = userController;
