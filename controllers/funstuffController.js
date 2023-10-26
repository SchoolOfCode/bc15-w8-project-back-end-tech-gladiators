import {
  getFunstuff,
  createFunstuff,
  deleteFunstuffById,
} from "../models/funstuffModel.js";
//HTTP handler for get all
export async function getFunstuffList(req, res) {
  try {
    const funstuffData = await getFunstuff();
    res.status(200).send({ status: "success", data: funstuffData });
    console.log(funstuffData);
  } catch (error) {
    // Handle unexpected errors, e.g., database connection errors, server errors.
    console.error(error);
    res
      .status(500)
      .json({
        status: "error",
        message: "An error occurred while fetching Funstuff data.",
      });
  }
}
// console.log(getFunstuffList());
//HTTP handler route for POST
export async function postFunstuff(req, res) {
  try {
    //store in a variable the req.body
    const newData = req.body;
    //store in a variable the await promise
    const newFunstuffData = await createFunstuff(newData);
    //return status
    res.status(201).json({ status: "success", data: newFunstuffData });
  } catch (error) {
    // Handle unexpected errors, e.g., database connection errors, server errors.
    console.error(error);
    res.status(500).json({
      status: "error",
      message: "An error occurred while creating Funstuff data.",
    });
  }
}
//Endpoint to delete item by id
export async function deleteFunstuff(req, res) {
  try {
    //store in a variable your req.params.id
    const id = req.params.id;
    //store in a variable the await promise
    const deleteItem = await deleteFunstuffById(id);
    //404 error if item not found
    if (!deleteItem) {
      return res
        .status(404)
        .json({ status: "fail", data: "Data item not found by Id." });
    }
    //return success status
    res.status(200).json({ status: "success", data: deleteItem });
  } catch (error) {
    // Handle unexpected errors, e.g., database connection errors, server errors.
    console.error(error);
    res.status(500).json({
      status: "error",
      message: "An error occurred while deleting the Funstuff data.",
    });
  }
}
