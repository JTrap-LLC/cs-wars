const { Pool } = require('pg');

const PG_URI =
  'postgres://foowmfyb:Ssw_QCFOIUcqxn4MItAMAvy5OFiaviip@rajje.db.elephantsql.com:5432/foowmfyb';

const pool = new Pool({
  connectionString: PG_URI,
  connectionLimit: 300,
});

// ========= DATABASE INFO ========= //
// TABLE: "users"
// COLUMNS: "firstName", "lastName", "cwUsername"

module.exports = { // when we make a request to pool.query, now it listens for params (string, params, callback)
  query: (string, params, callback) => {
    console.log('executed query', text);
    return pool.query(string, params, callback);
  },
};

// resources:
// https://node-postgres.com/features/connecting#Connection%20URI
