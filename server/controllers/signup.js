import { queryObject } from '../models/model.js';

export const signup = async (req, res, next) => {
  const {userId} = req.body;
  
  const query = {
    text: `INSERT INTO public."User" ("feed_id")
    VALUES ($1)`,
    values: [userId],
  };

  // const insertUserQuery = `
  //   INSERT INTO public."User" ("feed_id")
  //   VALUES (DEFAULT)
  //   RETURNING "id"`

    try{
      const data = await queryObject.query(query);
      console.log(data);
      return next();
    } catch(error){
      next({
        log: `controller error: ${error}`,
        message: { err: 'Error occured in Controllo login.'},
        status: 500,
    })
    }
};