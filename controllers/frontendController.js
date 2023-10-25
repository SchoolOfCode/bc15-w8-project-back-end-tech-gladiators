import { getFrontend, createFrontend } from "../models/frontendModel.js";

//HTTP handler for get all
export async function getFrontendList(req, res) {
  const frontendData = await getFrontend();
  res.status(200).send({ status: "success", data: frontendData });
  console.log(frontendData);
}

// console.log(getFrontendList());

//HTTP handler route for POST


export async function postFrontend(req, res) {
  //store in a variable the req.body
  const newData = req.body;
  //store in a variable the await promise
  const newDFrontendData = await createFrontend(newData);
  //return status
  res.status(201).json({ status: "success", data: newDFrontendData });
};

