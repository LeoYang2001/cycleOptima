const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

exports.getAllWasherCycles = (req, res) => {
  db.query("SELECT * FROM washer_cycles", (err, results) => {
    if (err) {
      console.error("Error fetching washer cycles:", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.json(results);
  });
};

exports.createWasherCycle = (req, res) => {
  const { id, displayName, data } = req.body;
  const sql =
    "INSERT INTO washer_cycles (id, displayName, data) VALUES (?, ?, ?)";
  db.query(sql, [id, displayName, JSON.stringify(data)], (err, result) => {
    if (err) {
      console.error("Error inserting cycle:", err);
      return res.status(500).json({ error: "Insert failed" });
    }
    res.status(201).json({ message: "Cycle created", id });
  });
};
