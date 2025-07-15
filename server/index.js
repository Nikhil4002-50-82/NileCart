import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import axios from 'axios';
import dotenv from "dotenv";
import { createClient } from '@supabase/supabase-js';

dotenv.config();

const app = express();
const port = 3000;

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.get("/getDataFromApi", async (req, res) => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    const apiData = response.data;

    for(const product of apiData) {
      const { id: productid, title, price, description, category, image, rating } = product;
      const { rate = 0, count = 0 } = rating || {};
      await supabase.from("products").upsert([
        { productid, title, price, description, category, image, rate, count }
      ]);
    }

    res.status(200).json({ message: "Products inserted successfully." });
  } catch (error) {
    console.log(`error message: ${error.message}`);
    res.status(500).json({ error: "Failed to fetch or insert products" });
  }
});

app.get("/", (req, res) => {
  res.status(200).send("API is running...");
});

app.get("/getDataFromProducts", async (req, res) => {
  try {
    const { data, error } = await supabase.from("products").select("*");
    if (error) throw error;
    res.status(200).json(data);
  } catch (error) {
    console.log(`error message : ${error.message}`);
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

app.get("/getProductById/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const { data, error } = await supabase.from("products").select("*").eq("productid", id);
    if (error) throw error;
    res.status(200).json(data);
  } catch (error) {
    console.log(`error message : ${error.message}`);
    res.status(500).json({ error: "Failed to fetch product" });
  }
});

app.post("/addUser", async (req, res) => {
  const { name, phoneno, username, password } = req.body;
  try {
    const { error } = await supabase.from("auth").insert([{ name, phoneno, username, password }]);
    if (error) throw error;
    res.status(200).json({ message: "User added successfully" });
  } catch (error) {
    console.log(`error message:${error.message}`);
    res.status(500).json({ error: "Failed to add user" });
  }
});

app.post("/userLogin", async (req, res) => {
  const { username, password } = req.body;
  try {
    const { data, error } = await supabase
      .from("auth")
      .select("*")
      .eq("username", username)
      .eq("password", password);
    if (error) throw error;

    if (data.length > 0) {
      res.status(200).json({ message: "User logged in successfully.", user: data });
    } else {
      res.status(200).json({ message: "Invalid username or password" });
    }
  } catch (error) {
    console.log(`error message:${error.message}`);
    res.status(500).json({ error: "Login failed" });
  }
});

app.post("/addToCart", async (req, res) => {
  const { userid, productid, quantity } = req.body;
  try {
    const { error } = await supabase.from("cart").insert([{ userid, productid, quantity }]);
    if (error) throw error;
    res.status(200).json({ message: "Product added to cart successfully." });
  } catch (error) {
    console.log(`error message : ${error.message}`);
    res.status(500).json({ error: "Failed to add to cart" });
  }
});

app.get("/getCartItems", async (req, res) => {
  const userid = req.query.userid;
  try {
    const { data, error } = await supabase
      .from("cart")
      .select("*, products(*)")
      .eq("userid", userid);
    if (error) throw error;
    res.status(200).json(data);
  } catch (error) {
    console.log(`error message : ${error.message}`);
    res.status(500).json({ error: "Failed to fetch cart items" });
  }
});

app.get("/getCartTotal", async (req, res) => {
  const userid = req.query.userid;
  let totalCost = 0;
  try {
    const { data, error } = await supabase
      .from("cart")
      .select("quantity, products(price)")
      .eq("userid", userid);

    if (error) throw error;

    data.forEach((i) => {
      const price = parseFloat(i.products.price);
      totalCost += i.quantity * price;
    });

    res.json({
      totalCost: totalCost,
      totalCount: data.length,
    });
  } catch (error) {
    console.log(`error message : ${error.message}`);
    res.status(500).json({ error: "Failed to calculate total" });
  }
});

app.post("/deleteItemFromCart", async (req, res) => {
  const { userid, productid } = req.body;
  try {
    const { error } = await supabase
      .from("cart")
      .delete()
      .match({ userid, productid });
    if (error) throw error;
    res.status(200).json({ message: "Deleted item from cart successfully." });
  } catch (error) {
    console.log(`error message : ${error.message}`);
    res.status(500).json({ error: "Failed to delete item" });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
