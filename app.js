import express, { response } from "express";
import morgan from "morgan";
import { getFrontendList, postFrontend, deleteFrontend, } from "./controllers/frontendController.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  console.log("Hello")
  res.json({ status: "success", data: "This route works!" });
});

app.get("/frontend", getFrontendList);
app.post("/frontend", postFrontend)
app.delete("/frontend/:id", deleteFrontend);

const PORT = 7000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
