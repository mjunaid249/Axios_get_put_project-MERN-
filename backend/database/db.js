import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const Mongo_URI = process.env.Mongo_URI;
mongoose
  .connect(Mongo_URI, {
    dbName: "Axios",
  })
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log("Unable to connect to database", err));
