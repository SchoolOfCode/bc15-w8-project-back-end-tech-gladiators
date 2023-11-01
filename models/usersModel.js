// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "../db/index.js";
import bcrypt, { hash } from "bcrypt";

const saltRounds = 10;

//get user by username 
export async function getUserByNameAndPassword(username, password) {
  // Query the database and return the user with a matching name and password
  //initiate variable to store our SQL query string
  const queryText = "SELECT * FROM users WHERE username = $1";
  //await the pool query to send the query to the database
  const result = await pool.query(queryText, [username]);
  //return the user in the row with the specific details
  //otherwise our return will be NULL
  let passwordCheck = result.rows[0].password
  const isMatch = await bcrypt.compare(password, passwordCheck)
  if(isMatch){
    return result.rows[0]
  } else {
  return null;}
}

export async function createUser(user) {
  // Query the database to create an director and return the newly created user
  const queryText =
    "INSERT INTO users (name, email, username, password, imglink) VALUES ($1, $2, $3, $4, $5) RETURNING *";
  //define elements of the request and placeholder values
  //hash password before storing
  const hash = await bcrypt.hash(user.password, 10)
console.log(hash)
  const result = await pool.query(queryText, [
    user.name,
    user.email,
    user.username,
    hash,
    user.imglink
  ]);
  //return result
  return result.rows[0] || null;
}

//get user by id
export async function getUserById(id){
    // Query the database and return the user with a matching name and password
  //initiate variable to store our SQL query string
  const queryText = "SELECT * FROM users WHERE id = $1 ";
  //await the pool query to send the query to the database
  const result = await pool.query(queryText, [id]);

  return result.rows[0] || null;
}

//update rating for front end 
export async function updateFrontRating(id, rating){
  const queryText = "UPDATE users SET frontrating = $2 WHERE id = $1 RETURNING *";

  const result = await pool.query(queryText, [id, rating]);
  return result.rows[0] || null;
}

//update rating for back end 
export async function updateBackRating(id, rating){
  const queryText = "UPDATE users SET backRating = $2 WHERE id = $1 RETURNING *";

  const result = await pool.query(queryText, [id, rating]);
  return result.rows[0] || null;
}

//update rating for ui 
export async function updateUiRating(id, rating){
  const queryText = "UPDATE users SET uiRating = $2 WHERE id = $1 RETURNING *";

  const result = await pool.query(queryText, [id, rating]);
  return result.rows[0] || null;
}