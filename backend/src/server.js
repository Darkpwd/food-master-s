import express, { json } from "express";
import colors from "colors";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import { router as routerAuth } from "./routes/authRoutes.js";
import { router as userRoutes } from "./routes/userRoutes.js";
import { router } from "./routes/testingRoutes.js";
import { connectDB } from "./config/db.js";

// dot env config
dotenv.config();

//DB connection
connectDB();

const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/v1/test", router); // path from my address web
app.use("/api/v1/auth", routerAuth); // route auth
app.use("/api/v1/user", userRoutes); // user route

// Create my routes
// get route
app.get("/", (req, res) => {
  return res.status(200).send("<h1>Hello World!</h1>");
});

// PORT
const PORT = process.env.PORT || 8088;

// Create a server for connection
app.listen(PORT, () => {
  // Define the color from my log message
  console.log(`Server Running in ${PORT} port.`.white.bgMagenta);
});
