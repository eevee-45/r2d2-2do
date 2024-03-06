import { queryObject } from '../models/model.js';

export const login = async (req, res, next) => {
  try{
    const queryString = `SELECT * FROM "public"."User"`;
    const data = await queryObject.query(queryString);
    res.locals.feedData = data; 
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