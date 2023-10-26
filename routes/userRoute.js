import express from "express";
import * as userController from "../controllers/usersController.js"; //import all controller functions

export const userRoute = express.Router();

//user router and express method using controller functions
userRoute.get("/", userController.getUserNamePassword);
userRoute.post("/", userController.postUser);


