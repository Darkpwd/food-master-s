import express from "express";
import { testUserController } from "../controllers/testControllers.js";

//router object
export const router = express.Router();

//export

// routes GET | POST | UPDATE | DELETE
router.get("/test-user", testUserController);
