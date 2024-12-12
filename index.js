import express from "express";
import route from "./routes/products.route.js";
import { config } from "dotenv";
import { connectToDatabase } from "./db/db.js";

const app = express();

config();

app.use(express.json());

app.use("/api/v1/products", route);

const PORT = process.env.PORT || 5000;

connectToDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on: http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error occurred with mysql connection. Error -> ", err);
    process.exit(0);
  });
