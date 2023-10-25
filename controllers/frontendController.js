import { getFrontend, createFrontend, deleteFrontendById } from "../models/frontendModel.js";

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

//Endpoint to delete item by id
export async function deleteFrontend(req, res) {
  //store in a variable your req.params.id
  const id = req.params.id;
  //store in a variable the await promise
  const deleteItem = await deleteFrontendById(id);
  //404 error if item not found
  if (!deleteItem) {
    return res
      .status(404)
      .json({ status: "fail", data: "Data item not found by Id." });
  }
  //return success status
  res.status(200).json({ status: "success", data: deleteItem });
};