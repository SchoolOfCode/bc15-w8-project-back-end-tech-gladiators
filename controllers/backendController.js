import {
  getBackend,
  createBackend,
  deleteBackendById,
} from "../models/backendModel.js";

//HTTP handler for get all
export async function getBrontendList(req, res) {
  const backendData = await getBackend();
  res.status(200).send({ status: "success", data: backendData });
  console.log(backendData);
}

//HTTP handler route for POST

export async function postFrontend(req, res) {
  //store in a variable the req.body
  const newData = req.body;
  //store in a variable the await promise
  const newBackendData = await createBackend(newData);
  //return status
  res.status(201).json({ status: "success", data: newBackendData });
}

//Endpoint to delete item by id
export async function deleteBackend(req, res) {
  //store in a variable your req.params.id
  const id = req.params.id;
  //store in a variable the await promise
  const deleteItem = await deleteBackendById(id);
  //404 error if item not found
  if (!deleteItem) {
    return res
      .status(404)
      .json({ status: "fail", data: "Data item not found by Id." });
  }
  //return success status
  res.status(200).json({ status: "success", data: deleteItem });
}
