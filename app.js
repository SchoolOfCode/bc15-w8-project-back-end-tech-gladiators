import express from "express";
import cors from "cors";
import morgan from "morgan";
// import { getFrontendList, postFrontend, deleteFrontend, } from "./controllers/frontendController.js";

import { frontendRoute } from "./routes/frontendRoute.js";
import { backendRoute } from "./routes/backendRoute.js";
export const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/frontend", frontendRoute);
app.use("/backend", backendRoute);
app.use("funstuff", funstuffRoute)

// app.get("/", (req, res) => {
//   console.log("Hello")
//   res.json({ status: "success", data: "This route works!" });
// });

// app.get("/frontend", getFrontendList);
// app.post("/frontend", postFrontend)
// app.delete("/frontend/:id", deleteFrontend);

// const PORT = 7000;

// app.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// });
