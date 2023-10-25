import express from "express";
import * as frontendController from "../controllers/frontendController.js";

export const frontendRoute = express.Router();

frontendRoute.get("/", frontendController.getFrontendList);
frontendRoute.post("/", frontendController.postFrontend);
frontendRoute.delete("/:id", frontendController.deleteFrontend);
