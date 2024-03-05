import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import bodyParser from "body-parser";
import { getUsers } from "./controllers/feed.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ extended: true }));
dotenv.config();

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

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3001

app.get("/", getUsers);
app.get("/signup", createNewUser);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})