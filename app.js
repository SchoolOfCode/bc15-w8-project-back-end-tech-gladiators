import express, { response } from "express";
import morgan from "morgan";
import { getFrontendList } from "./controllers/frontendController.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ status: "success", data: "This route works!" });
});

app.get("/frontend", getFrontendList);


const PORT = 5500;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
