import express from "express";
import { registerController } from "../controllers/authController.js";

export const router = express.Router();

//routes
//REGISTER || POST

router.post("/register", registerController);
