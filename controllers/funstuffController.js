import { createUser, getUserByNameAndPassword } from "../models/usersModel.js";

//HTTP handler for get user
app.get("/directors/:id");

export async function getUserNamePassword(req, res) {
  //store in a variable your req.params.id
  const id = req.params.id;
  //store in a variable the await promise
  const user = await getUserByNameAndPassword(id);
  //404 error if user not found
  if (!user) {
    console.log("User not found!");
    return res.status(404).json({ status: "fail", data: "User not found." });
  }
  //return status
  res.status(200).json({ status: "success", data: user });
}

//HTTP handler to create user
export async function postUser(req, res) {
  //store in a variable the req.body
  const newData = req.body;
  //store in a variable the await promise
  const newUserData = await createUser(newData);
  //return status
  res.status(201).json({ status: "success", data: newUserData });
}
