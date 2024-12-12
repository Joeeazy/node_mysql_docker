import { pool } from "./db.js";

export const find = async () => {
  const QUERY = "SELECT * FROM products";

  try {
    const client = await pool.getConnection();

    const result = await client.query(QUERY);

    //console.log(result[0]);

    return result[0];
  } catch (error) {
    console.log("Error occured in the find products query", error);
    throw error;
  }
};
export const findById = async (id) => {
  const QUERY = "SELECT * FROM products WHERE id = ?";

  try {
    const client = await pool.getConnection();

    const result = await client.query(QUERY, [id]);

    //console.log(result[0]);

    return result[0];
  } catch (error) {
    console.log("Error occured in the findById products query", error);
    throw error;
  }
};
export const create = async (title, description, price) => {
  const QUERY = `INSERT INTO products (title, description, price) VALUES(?,?,?)`;

  try {
    const client = await pool.getConnection();

    const result = await client.query(QUERY, [title, description, price]);

    //console.log(result[0]);

    return result;
  } catch (error) {
    console.log("Error occured in the Create products query", error);
    throw error;
  }
};

export const update = async (title, description, price, id) => {
  const QUERY = `UPDATE products
                 SET title = ?, description = ?, price = ?
                 WHERE id = ?`;
  try {
    const client = await pool.getConnection();

    const result = await client.query(QUERY, [title, description, price, id]);

    //console.log(result[0]);

    return result[0];
  } catch (error) {
    console.log("Error occured in the findById products query", error);
    throw error;
  }
};
export const deleteById = async (id) => {
  const QUERY = `DELETE FROM products WHERE id = ?`;
  try {
    const client = await pool.getConnection();

    const result = await client.query(QUERY, [id]);

    //console.log(result[0]);

    return result[0];
  } catch (error) {
    console.log("Error occured in the findById products query", error);
    throw error;
  }
};
