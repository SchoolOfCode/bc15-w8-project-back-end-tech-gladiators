import { getFrontend } from "../models/frontendModel.js";

//HTTP handler
export async function getFrontendList(req, res) {
  const frontendData = await getFrontend();
  // res.status(200).json({ status: "success", data: frontendData });
  console.log(frontendData);
}

// console.log(getFrontendList());
