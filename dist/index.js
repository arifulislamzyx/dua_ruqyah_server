import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import CategoryRoute from "./route/Category";
import DuasRoute from "./route/Dua";
import SubCategoryRoute from "./route/SubCategory";
import sqlite3 from "sqlite3";
// Load environment variables
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/categories", CategoryRoute);
app.use("/duas", DuasRoute);
app.use("/subcategories", SubCategoryRoute);
console.log("Database URL:", process.env.DATABASE_URL);
const db = new sqlite3.Database("./src/db/dua_main.sqlite", (err) => {
    if (err) {
        console.log("Error Connecting Db", err.message);
    }
    else {
        console.log("Db Connected");
    }
});
console.log("db is here", db);
// Define PORT with type annotation
const PORT = parseInt(process.env.PORT || "8000", 10);
// Example route
app.get("/", (req, res) => {
    res.send("Server is running!");
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
