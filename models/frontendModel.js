// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "../db/index.js";

//get all from db gunction
export async function getFrontend() {
  // Query the database and return all authors

  // Define the SQL query to fetch all authors from the 'authors' table
  const queryText = "SELECT * FROM frontend";

  // Use the pool object to send the query to the database
  const result = await pool.query(queryText);

  // The rows property of the result object contains the retrieved records
  console.log(result)
  return result.rows;
}

// console.log(getFrontend())