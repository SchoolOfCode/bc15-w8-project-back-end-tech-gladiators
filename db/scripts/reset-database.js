import { pool } from "../index.js";

async function resetDatabase() {
  try {
    // Drop existing tables if they exist
    await pool.query(`
      DROP TABLE IF EXISTS frontend CASCADE;
      DROP TABLE IF EXISTS backend CASCADE;
      DROP TABLE IF EXISTS funstuff CASCADE;
      DROP TABLE IF EXISTS uxdesign CASCADE;
    `);

    // Create the frontend table
    await pool.query(`
      CREATE TABLE frontend (
        id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description VARCHAR(255) NOT NULL,
        link VARCHAR(255) NOT NULL,
        imglink VARCHAR(255) NOT NULL,
        category VARCHAR(255) NOT NULL
      );
    `);

    // Create the backend table
    await pool.query(`
      CREATE TABLE backend (
        id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description VARCHAR(255) NOT NULL,
        link VARCHAR(255) NOT NULL,
        imglink VARCHAR(255) NOT NULL,
        category VARCHAR(255) NOT NULL
      );
    `);

        // Create the funstuff table
        await pool.query(`
        CREATE TABLE funstuff (
          id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
          title VARCHAR(255) NOT NULL,
          description VARCHAR(255) NOT NULL,
          link VARCHAR(255) NOT NULL,
          imglink VARCHAR(255) NOT NULL,
          category VARCHAR(255) NOT NULL
        );
      `);

          // Create the uxdesign table
    await pool.query(`
    CREATE TABLE uxdesign (
      id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description VARCHAR(255) NOT NULL,
      link VARCHAR(255) NOT NULL,
      imglink VARCHAR(255) NOT NULL,
      category VARCHAR(255) NOT NULL
    );
  `);

    // Seed the frontend table
    await pool.query(`
      INSERT INTO frontend (title, description, link, imglink, category)
      VALUES
        ('Hello', 'Martina', 'Hello', 'Hello', 'Hello'),
        ('Hello', 'Martina', 'Hello', 'Hello', 'Hello'),
        ('Hello', 'Martina', 'Hello', 'Hello', 'Hello'),
        ('Hello', 'Martina', 'Hello', 'Hello', 'Hello'),
        ('Hello', 'Martina', 'Hello', 'Hello', 'Hello')
    `);

    // Seed the backend table
    await pool.query(`
        INSERT INTO backend (title, description, link, imglink, category)
        VALUES
        ('Hello', 'Martina', 'Hello', 'Hello', 'Hello'),
        ('Hello', 'Martina', 'Hello', 'Hello', 'Hello'),
        ('Hello', 'Martina', 'Hello', 'Hello', 'Hello'),
        ('Hello', 'Martina', 'Hello', 'Hello', 'Hello'),
        ('Hello', 'Martina', 'Hello', 'Hello', 'Hello')
      `);

          // Seed the funstuff table
    await pool.query(`
    INSERT INTO funstuff (title, description, link, imglink, category)
    VALUES
    ('Hello', 'Martina', 'Hello', 'Hello', 'Hello'),
    ('Hello', 'Martina', 'Hello', 'Hello', 'Hello'),
    ('Hello', 'Martina', 'Hello', 'Hello', 'Hello'),
    ('Hello', 'Martina', 'Hello', 'Hello', 'Hello'),
    ('Hello', 'Martina', 'Hello', 'Hello', 'Hello')
  `);

      // Seed the uxdesign table
      await pool.query(`
      INSERT INTO uxdesign (title, description, link, imglink, category)
      VALUES
      ('Hello', 'Martina', 'Hello', 'Hello', 'Hello'),
      ('Hello', 'Martina', 'Hello', 'Hello', 'Hello'),
      ('Hello', 'Martina', 'Hello', 'Hello', 'Hello'),
      ('Hello', 'Martina', 'Hello', 'Hello', 'Hello'),
      ('Hello', 'Martina', 'Hello', 'Hello', 'Hello')
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
