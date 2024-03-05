import { queryObject } from '../models/model.js';

export const getUsers = (req, res, next) => {
  const queryString = `
  SELECT * FROM "public"."user"`;

  queryObject.query(queryString, (error, result) => {
    if (error) {
      return next(error);
    }

    console.log(result.rows);
    res.locals.characters = result.rows;
    next();
  });
};
