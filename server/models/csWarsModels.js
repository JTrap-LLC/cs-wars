const { Pool } = require('pg');

const PG_URI =
  'postgres://foowmfyb:Ssw_QCFOIUcqxn4MItAMAvy5OFiaviip@rajje.db.elephantsql.com:5432/foowmfyb';

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
  connectionLimit: 300,
});

// Export an object with "query" property
// whose value is a func that invokes pool.query()
// This will be required in the controllers to be the access point to the database
module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};

// resources:
// https://node-postgres.com/features/connecting#Connection%20URI
