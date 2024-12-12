import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  updateProduct,
} from "../handlers/products.handler.js";

const route = Router();

route.get("/", getAllProducts);

route.get("/:id", getProduct);

route.post("/create", createProduct);

route.patch("/update/:id", updateProduct);

route.delete("/delete/:id", deleteProduct);

export default route;
