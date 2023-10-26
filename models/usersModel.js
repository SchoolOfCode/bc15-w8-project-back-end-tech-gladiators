// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "../db/index.js";

//get user by id
export async function getUserByNameAndPassword(name, password) {
  // Query the database and return the user with a matching name and password
  //initiate variable to store our SQL query string
  const queryText = "SELECT * FROM users WHERE name = $1 AND password= $2";
  //await the pool query to send the query to the database
  const result = await pool.query(queryText, [name, password]);
  //return the user in the row with the specific details
  //otherwise our return will be NULL
  return result.rows[0] || null;
}

export async function createUser(user) {
  // Query the database to create an director and return the newly created director
  const queryText =
    "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *";
  const result = await pool.query(queryText, [
    user.name,
    user.email,
    user.password,
  ]);
  //return result
  return result.rows[0] || null;
}
