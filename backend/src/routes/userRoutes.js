import express from "express";
import {
  getUserController,
  resetPasswordController,
  updateUserController,
} from "../controllers/userController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

export const router = express.Router();

//routes
// GET USER || GET
router.get("/getUser", authMiddleware, getUserController);

//UPDATE PROFILE
router.put("/updateUser", authMiddleware, updateUserController);

// RESET PASSWORD
router.post("/resetPassword", authMiddleware, resetPasswordController);
