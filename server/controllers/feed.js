import { queryObject } from '../models/model.js';

export const getFeed = (req, res, next) => {
  const feedId = req.query.feedId; // Adjust this based on how you pass the feedId

  const query = {
    text: `SELECT f.id AS feed_id, c.id AS checklist_id, c.name AS checklist_name, t.id AS task_id, t.content AS task_content, t.done AS task_done FROM "public"."feed" f LEFT JOIN "public"."checklist" c ON f.id = c.feed_id LEFT JOIN "public"."tasks" t ON c.id = t.checklist_id WHERE f.id = $1;`,
    values: [feedId],
  };

  queryObject.query(query)
  .then(data => {
    console.log(data);
    next();
  })

  // const queryString = `
  //   SELECT
  //     f.id AS feed_id,
  //     c.id AS checklist_id,
  //     c.name AS checklist_name,
  //     t.id AS task_id,
  //     t.content AS task_content,
  //     t.done AS task_done
  //   FROM "public"."feed" f
  //   LEFT JOIN "public"."checklist" c ON f.id = c.feed_id
  //   LEFT JOIN "public"."tasks" t ON c.id = t.checklist_id
  //   WHERE f.id = $1;`;

  // queryObject.query(query, (error, result) => {
  //   if (error) {
  //     return next(error);
  //   }

  //   // Process the query result to organize the data as needed
  //   const feedData = {};
  //   result.rows.forEach((row) => {
  //     // If the feed doesn't exist yet in the feedData object, create it
  //     if (!feedData.feed_id) {
  //       feedData.feed_id = row.feed_id;
  //       feedData.checklists = [];
  //     }

  //     // If the checklist doesn't exist yet in the feedData object, create it
  //     let checklist = feedData.checklists.find(
  //       (item) => item.id === row.checklist_id
  //     );
  //     if (!checklist) {
  //       checklist = {
  //         id: row.checklist_id,
  //         name: row.checklist_name,
  //         tasks: [],
  //       };
  //       feedData.checklists.push(checklist);
  //     }

  //     // Add task to the checklist
  //     checklist.tasks.push({
  //       id: row.task_id,
  //       content: row.task_content,
  //       done: row.task_done,
  //     });
  //   });

  //   // Set the feed data to res.locals
  //   res.locals.feedData = feedData;
  //   next();
  // });
};

// export const createChecklist = (req, res, next) => {
//   const queryString = `
//   SELECT * FROM "public"."user"`;

//   queryObject.query(queryString, (error, result) => {
//     if (error) {
//       return next(error);
//     }

//     console.log(result.rows);
//     res.locals.characters = result.rows;
//     next();
//   });
// };
