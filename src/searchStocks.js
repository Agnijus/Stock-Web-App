const mysql = require("mysql2/promise");

exports.handler = async (event) => {
  const connection = mysql.createConnection(process.env.VITE_APP_DATABASE_URL);

  try {
    // Example: Query to search stocks (modify as needed)
    const [rows] = await connection.execute(
      "SELECT * FROM stocks WHERE name LIKE ?",
      [`%${event.queryStringParameters.searchTerm}%`]
    );
    return {
      statusCode: 200,
      body: JSON.stringify(rows),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to query database" }),
    };
  } finally {
    await connection.end();
  }
};
