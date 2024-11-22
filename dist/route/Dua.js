import { Router } from "express";
import sqlite3 from "sqlite3";
const router = Router();
// Initialize the SQLite database connection
const db = new sqlite3.Database("./src/db/dua_main.sqlite", (err) => {
    if (err) {
        console.error("Error connecting to the database:", err.message);
    }
});
router.get("/", (req, res) => {
    db.all("SELECT * FROM dua", [], (err, rows) => {
        if (err) {
            console.error("Error fetching categories:", err.message);
            res.status(500).json({ error: "Failed to fetch categories" });
            return;
        }
        res.json(rows);
    });
});
export default router;
