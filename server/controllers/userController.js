const db = require('../models/csWarsModels'); // (text, params, callback)

const userController = {};

// ========= DATABASE INFO ========= //
// TABLE: "users"
// COLUMNS: "firstName", "lastName", "cwusername"

//======= GET USER ========//
userController.updateUser = async (req, res, next) => {
  console.log('rlu', res.locals.user);
  const cwUsername = res.locals.user.username;
  const rank = res.locals.user.ranks.overall.name;
  const completed = res.locals.user.codeChallenges.totalCompleted;
  try {
    let queryString = `
    UPDATE users
    SET rank='${rank}', completed=${completed}
    WHERE cwusername='${cwUsername}'
    RETURNING *;
    `;

    const { rows } = await db.query(queryString);
    res.locals.userSQL = await rows[0];
    next();
  } catch (err) {
    next({
      log: 'Error thrown in updateUser middleware',
    });
  }
};

//======= GET USERS ========//
userController.getUsers = async (req, res, next) => {
  try {
    let queryString = `
    SELECT *
    FROM users;
    `;

    const { rows } = await db.query(queryString);
    res.locals.cwusernames = await rows;
    console.log('Hit userController.getUsers');
    next();
  } catch (err) {
    next({
      log: 'Error thrown in getUsers middleware',
    });
  }
};

//======= UPDATE USERS ========//
userController.updateUsers = async (req, res, next) => {
  try {
    const updatedArr = await Promise.all(
      res.locals.cwusersdata.map((userdata) => {
        if (userdata.username) {
          const csUsername = userdata.username;
          const rank = userdata.ranks.overall.name;
          const completed = userdata.codeChallenges.totalCompleted;
          let queryString = `
          UPDATE users 
          SET  rank='${rank}', completed=${completed}
          WHERE cwUsername='${csUsername}'
          RETURNING *;
          `;
          const { rows } = db.query(queryString);
          console.log(rows);
          return rows[0];
        } else return;
      })
    );

    res.locals.SQLusers = await updatedArr;
    next();
  } catch (err) {
    next({
      log: err,
    });
  }
};

// //======= CREATE USER ========//
userController.createUser = async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      cwUsername,
      rank,
      completed,
    } = res.locals.createuser;
    const string = `
        INSERT INTO users (firstName, lastName, cwUsername, rank, completed)
        VALUES ('${firstName}', '${lastName}', '${cwUsername}', '${rank}', ${completed})
        RETURNING *
      `;
    const { rows } = await db.query(string);
    res.locals.userinfo = rows[0];
    console.log(res.locals.userinfo);
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = userController;
