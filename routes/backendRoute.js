import express from "express";
import * as backendController from "../controllers/backendController.js";

export const backendRoute = express.Router();

backendRoute.get("/", backendController.getBrontendList);
backendRoute.post("/", backendController.postFrontend);
backendRoute.delete("/:id", backendController.deleteBackend);
