const mysql = require("mysql2/promise");

exports.handler = async (event) => {
  let connection;

  try {
    // Create a new database connection
    connection = await mysql.createConnection(
      process.env.VITE_APP_DATABASE_URL
    );

    // Parse the incoming data
    const stocks = JSON.parse(event.body);

    // Prepare your SQL statement
    const sql = `
      INSERT INTO stocks (symbol, name, currency, exchange, mic_code, country, type)
      VALUES (?, ?, ?, ?, ?, ?, ?)
      ON DUPLICATE KEY UPDATE
      name = VALUES(name),
      currency = VALUES(currency),
      exchange = VALUES(exchange),
      mic_code = VALUES(mic_code),
      country = VALUES(country),
      type = VALUES(type);
    `;

    // Execute the SQL statement for each stock
    for (const stock of stocks) {
      await connection.execute(sql, [
        stock.symbol,
        stock.name,
        stock.currency,
        stock.exchange,
        stock.mic_code,
        stock.country,
        stock.type,
      ]);
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Stocks inserted/updated successfully" }),
    };
  } catch (error) {
    console.error("Database operation error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to insert/update stocks" }),
    };
  } finally {
    // Close the database connection
    if (connection) {
      connection.end();
    }
  }
};
