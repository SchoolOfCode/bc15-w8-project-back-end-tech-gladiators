import { getFrontend } from "../models/frontendModel.js";

//HTTP handler
export async function getFrontendList(req, res) {
  const frontendData = await getFrontend();
  res.status(200).send({ status: "success", data: frontendData });
  console.log(frontendData);
}

// console.log(getFrontendList());
