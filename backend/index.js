import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import "./database/db.js";
import router from "./routes/userRoutes.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

app.listen(3000, () => {
  console.log(`Server is Working at http://localhost:3000`);
});
