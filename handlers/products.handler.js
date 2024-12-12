import { find, findById, create, update, deleteById } from "../db/queries.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await find();

    //console.log(products[0]);

    return res.status(200).json({ products });
  } catch (error) {
    console.log(error);

    res
      .status(500)
      .json({ message: "Error Occured on getAllProducts Handler" });
  }
};
export const getProduct = async (req, res) => {
  const id = req.params.id;

  try {
    const product = await findById(id);

    //console.log(products[0]);

    return res.status(200).json({ product });
  } catch (error) {
    console.log(error);

    res.status(500).json({ message: "Error Occured on getProduct Handler" });
  }
};
export const createProduct = async (req, res) => {
  const { title, description, price } = req.body;

  if (!title || !description || !price) {
    return res.status(403).json({ message: "Input all the required fields" });
  }

  try {
    const product = await create(title, description, price);

    return res.status(201).json({ product });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error occured on te create products handler" });
  }
};
export const updateProduct = async (req, res) => {
  const { title, description, price } = req.body;

  const id = req.params.id;

  if (!title || !description || !price) {
    return res.status(403).json({ message: "Input all the required fields" });
  }

  try {
    const product = await update(title, description, price, id);

    return res.status(200).json({ product });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error occured on the updateProduct handler" });
  }
};
export const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await deleteById(id);
    return res.status(200).json({ product });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error occured on the deleteProduct handler" });
  }
};
