const mysql = require("mysql2/promise");

exports.handler = async (event) => {
  let connection;

  try {
    // Create a new database connection
    connection = await mysql.createConnection(
      process.env.VITE_APP_DATABASE_URL
    );

    // Your query execution
    const [rows] = await connection.execute(
      "SELECT * FROM stocks WHERE name LIKE ?",
      [`%${event.queryStringParameters.searchTerm}%`]
    );

    return {
      statusCode: 200,
      body: JSON.stringify(rows),
    };
  } catch (error) {
    // Error handling
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to query database" }),
    };
  } finally {
    // Close the database connection
    if (connection) {
      connection.end();
    }
  }
};
