import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import CategoryRoute from "./route/Category";
import DuasRoute from "./route/Dua";
import SubCategoryRoute from "./route/SubCategory";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/categories", CategoryRoute);
app.use("/duas", DuasRoute);
app.use("/subcategories", SubCategoryRoute);

const PORT: number = parseInt(process.env.PORT || "8000", 10);

app.get("/", (req: Request, res: Response) => {
  res.send("Server is running!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
