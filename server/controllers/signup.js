import { queryObject } from '../models/model.js';

export const signup = (req, res, next) => {
  const {userId} = req.body;
  
  const insertUserQuery = `
    INSERT INTO public."User" ("feed_id")
    VALUES (DEFAULT)
    RETURNING "id"`

  queryObject.query(insertUserQuery, [userId], (error, userResult) => {
    if (error) {
      return next(error);
    }

    const userId = userResult.rows[0].id;
  
    const inserFeedQuery = `
      INSERT INTO public."Feed" ("userId")
      VALUES ($1)
      RETURNING "id"`

    queryObject.query(inserFeedQuery, [userId], (error, feedResult) => {

      if (error) {
        return next(error);
      }

      const feedId = feedResult.rows[0].id;

      console.log(`New user with id ${userId} and ${feedId}`);

    })

  })
};