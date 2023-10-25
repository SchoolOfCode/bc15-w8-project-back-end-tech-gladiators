import express from "express";
import * as backendController from "../controllers/backendController.js";

export const backendRoute = express.Router();

backendRoute.get("/", backendController.getBackendList);
backendRoute.post("/", backendController.postBackend);
backendRoute.delete("/:id", backendController.deleteBackend);
