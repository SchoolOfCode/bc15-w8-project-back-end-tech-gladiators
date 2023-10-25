import express from "express";
import * as funstuffController from "../controllers/funstuffController.js";

export const funstuffRoute = express.Router();

funstuffRoute.get("/", funstuffController.getFunstuffList);
funstuffRoute.post("/", funstuffController.postFunstuff);
funstuffRoute.delete("/:id", funstuffController.deleteFunstuff);
