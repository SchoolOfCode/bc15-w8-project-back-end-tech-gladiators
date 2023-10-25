import express from "express";
import * as uxdesignController from "../controllers/uxdesignController";

export const uxdesignRoute = express.Router();

uxdesignRoute.get("/", uxdesignController.getUxdesignList);
uxdesignRoute.post("/", uxdesignController.postUxdesign);
uxdesignRoute.delete("/:id", uxdesignController.deleteUxdesign);
