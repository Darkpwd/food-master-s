import express, { json } from "express";
import colors from "colors";
import cors from "cors";
import morgan from "morgan";

const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Create my routes
app.get("/", (req, res) => {
  return res.status(200).send("<h1>Hello World!</h1>");
});

// Create a server for connection
app.listen(3335, () => {
  // Define the color from my log
  console.log("Server Running in 3335 port".white.bgMagenta);
});
