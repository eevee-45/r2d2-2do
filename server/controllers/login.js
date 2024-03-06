import { queryObject } from '../models/model.js';

export const login = (req, res, next) => {
  const id = req.params;
  const queryString = `SELECT * FROM "public"."User"`;
  queryObject.query(queryString, (error, queryResult) => {
    if(error) {
      return next(error);
    }
    else{
      console.log(queryResult)
      return next();
    }
  })
};