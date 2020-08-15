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
  
  module.exports = {
    query: (text, params, callback) => {
      console.log('executed query', text);
      return pool.query(text, params, callback);
    },
  };
  
  // resources:
  // https://node-postgres.com/features/connecting#Connection%20URI
  