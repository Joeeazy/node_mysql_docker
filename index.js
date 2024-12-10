import express from "express";
import route from "./routes/products.route.js";

const app = express();

app.use(express.json());

app.use("/api/v1/products", route);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});
