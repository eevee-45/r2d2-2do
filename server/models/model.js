import pg from 'pg';
const { Pool } = pg;

const PG_URI =process.env.PG_URI;

const pool = new Pool({
  connectionString: PG_URI
});

export const queryObject = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};