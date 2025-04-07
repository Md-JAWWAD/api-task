import express from "express";
import mongoose from "mongoose";
import Routes from "./Routes/Routes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4060;
const DBURL = process.env.MONGODB_URL;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/product", Routes);

mongoose.connect(DBURL)
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(`Connection failed: ${err}`));