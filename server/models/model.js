import pg from 'pg';
const { Pool } = pg;

const PG_URI =process.env.PG_URI;

const pool = new Pool({
  connectionString: PG_URI
});

export const queryObject = {
  query: async (text, params, callback) => {
    try{
      console.log('executed query', text);
      const result = await pool.query(text, params);
      console.log('reached query');
      return result.rows;
    }catch(error){
      return error;
    }
     
  }
};