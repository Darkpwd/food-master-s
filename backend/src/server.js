import express from "express";
import colors from "colors";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import path from "path";
import YAML from "yamljs";
import swaggerUi from "swagger-ui-express";

import { router as authRoutes } from "./routes/authRoutes.js";
import { router as userRoutes } from "./routes/userRoutes.js";
import { router as testingRoutes } from "./routes/testingRoutes.js";
import { connectDB } from "./config/db.js";

// Config .env
dotenv.config();

// Swagger config
const swaggerFile = YAML.load(path.resolve("src/docs/swagger.yaml"));

// Connect to DB
connectDB();

// App initialization
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Swagger docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

// Routes
app.use("/api/v1/test", testingRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", userRoutes);

// Default route
app.get("/", (req, res) => {
  res.status(200).send("<h1>Hello World!</h1>");
});

// Server
const PORT = process.env.PORT || 8088;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`.white.bgMagenta);
});
