import express, { response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import bodyParser from "body-parser";
import { getFeed } from "./controllers/feed.js";
import { signup } from "./controllers/signUp.js";
import { login } from "./controllers/login.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ extended: true }));
dotenv.config();

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3001


app.get("/:id", login, (req, res) => {
  console.log('reached server')
  return res.status(200).json(res.locals.feedData);
});

app.get("/feed", getFeed, (req, res) => {
  return res.status(200).send('feed');
});
app.post("/signup", signup, (req, res) => {
  return res.status(200).send('signed up')
})

app.use((err, req, res, next) => {
    const defaultErr = {
      log: "Express error handler caught unknown middleware error",
      status: 500,
      message: { err: "An error occurred" },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });



app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})