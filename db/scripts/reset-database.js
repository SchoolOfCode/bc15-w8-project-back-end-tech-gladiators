import { pool } from "../index.js";

async function resetDatabase() {
  try {
    // Drop existing tables if they exist
    await pool.query(`
      DROP TABLE IF EXISTS frontend CASCADE;
      DROP TABLE IF EXISTS backend CASCADE;
    `);

    // Create the frontend table
    await pool.query(`
      CREATE TABLE frontend (
        id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description VARCHAR(255) NOT NULL,
        link VARCHAR(255) NOT NULL
      );
    `);

    // Create the backend table
    await pool.query(`
      CREATE TABLE backend (
        id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description VARCHAR(255) NOT NULL,
        link VARCHAR(255) NOT NULL
      );
    `);

    // Seed the frontend table
    await pool.query(`
      INSERT INTO frontend (title, description, link)
      VALUES
        ('Hello', 'Martina', 'Hello'),
        ('Hello', 'Martina', 'Hello'),
        ('Hello', 'Martina', 'Hello'),
        ('Hello', 'Martina', 'Hello'),
        ('Hello', 'Martina', 'Hello')
    `);

    // Seed the backend table
    await pool.query(`
        INSERT INTO backend (title, description, link)
        VALUES
          ('Hello', 'Martina', 'Hello'),
          ('Hello', 'Martina', 'Hello'),
          ('Hello', 'Martina', 'Hello'),
          ('Hello', 'Martina', 'Hello'),
          ('Hello', 'Martina', 'Hello')
      `);

    console.log("Database reset successful");
  } catch (error) {
    console.error("Database reset failed: ", error);
  } finally {
    // End the pool
    await pool.end();
  }
}

await resetDatabase();
