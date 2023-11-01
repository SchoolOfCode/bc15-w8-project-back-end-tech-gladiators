import { createUser, getUserByNameAndPassword, getUserById, updateFrontRating, updateBackRating, updateUiRating} from "../models/usersModel.js";

export async function getUserNamePassword(req, res) {
  try {
    //store in a variable your req.params.id
    const username = req.body.username;
    const password = req.body.password;
    //store in a variable the await promise
    const user = await getUserByNameAndPassword(username, password);
    //404 error if user not found
    if (!user) {
      console.log("User not found!");
      return res.status(404).json({ status: "fail", data: "User not found." });
    }
    //return status
    res.status(200).json({ status: "success", data: user });
  } catch (error) {
    // Handle unexpected errors, e.g., database connection errors, server errors.
    console.error(error);
    res
      .status(500)
      .json({
        status: "error",
        message: "An error occurred while fetching user data.",
      });
  }
}


export async function getUser(req, res) {
  try {
  const id = req.body.id

  const user = await getUserById(id);

if (!user) {
  console.log("User not found!");
  return res.status(404).json({ status: "fail", data: "User not found." });
}

res.status(200).json({ status: "success", data: user });
  } catch (error) {
    // Handle unexpected errors, e.g., database connection errors, server errors.
    console.error(error);
    res
      .status(500)
      .json({
        status: "error",
        message: "An error occurred while fetching user data.",
      });
  }
}


//HTTP handler to create user
export async function postUser(req, res) {
  try {
    //store in a variable the req.body
    const newData = req.body;
    //store in a variable the await promise
    const newUserData = await createUser(newData);
    //return status
    res.status(201).json({ status: "success", data: newUserData });
  } catch (error) {
    // Handle unexpected errors, e.g., database connection errors, server errors.
    console.error(error);
    res
      .status(500)
      .json({
        status: "error",
        message: "An error occurred while creating a user.",
      });
  }
}


//update user rating for front end confidence
export async function updateUserFrontRating(req, res) {
  try {
    //store in a variable the req.body
    const newRating = req.body.rating;
    const id = req.body.id
    //store in a variable the await promise
    const newRatingData = await updateFrontRating(id, newRating);
    //return status
    res.status(201).json({ status: "success", data: newRatingData });
  } catch (error) {
    // Handle unexpected errors, e.g., database connection errors, server errors.
    console.error(error);
    res
      .status(500)
      .json({
        status: "error",
        message: "An error occurred while updating your rating.",
      });
  }
}

//update user rating for back end confidence
export async function updateUserBackRating(req, res) {
  try {
    //store in a variable the req.body
    const newRating = req.body.rating;
    const id = req.body.id
    //store in a variable the await promise
    const newRatingData = await updateBackRating(id, newRating);
    //return status
    res.status(201).json({ status: "success", data: newRatingData });
  } catch (error) {
    // Handle unexpected errors, e.g., database connection errors, server errors.
    console.error(error);
    res
      .status(500)
      .json({
        status: "error",
        message: "An error occurred while updating your rating.",
      });
  }
}

//update user rating for UI UX confidence
export async function updateUserUiRating(req, res) {
  try {
    //store in a variable the req.body
    const newRating = req.body.rating;
    const id = req.body.id
    //store in a variable the await promise
    const newRatingData = await updateUiRating(id, newRating);
    //return status
    res.status(201).json({ status: "success", data: newRatingData });
  } catch (error) {
    // Handle unexpected errors, e.g., database connection errors, server errors.
    console.error(error);
    res
      .status(500)
      .json({
        status: "error",
        message: "An error occurred while updating your rating.",
      });
  }
}