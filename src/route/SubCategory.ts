import { Request, Response, Router } from "express";
import sqlite3 from "sqlite3";

const router = Router();

// Initialize the SQLite database connection
const db = new sqlite3.Database("./src/db/dua_main.sqlite", (err: any) => {
  if (err) {
    console.error("Error connecting to the database:", err.message);
  }
});

router.get("/", (req: Request, res: Response) => {
  db.all("SELECT * FROM sub_category", [], (err: any, rows: any[]) => {
    if (err) {
      console.error("Error fetching categories:", err.message);
      res.status(500).json({ error: "Failed to fetch categories" });
      return;
    }
    res.json(rows);
  });
});

export default router;
