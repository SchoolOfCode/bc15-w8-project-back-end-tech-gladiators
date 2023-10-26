import express from "express";
import * as userController from "../controllers/usersController.js";

export const userRoute = express.Router();

userRoute.get("/", userController.getUserNamePassword);
userRoute.post("/", userController.postUser);


