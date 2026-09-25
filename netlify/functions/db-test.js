const mysql = require("mysql2/promise");

exports.handler = async () => {
  try {
    const conn = await mysql.createConnection(process.env.DATABASE_URL);
    const [rows] = await conn.execute("SELECT DATABASE() AS db, NOW() AS time");
    await conn.end();
    return { statusCode: 200, body: JSON.stringify({ ok: true, rows }) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ ok: false, error: err.message }) };
  }
};
