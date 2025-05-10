import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import { Pool } from 'pg';
import axios from 'axios';
import dotenv from "dotenv";

dotenv.config();

const app=express();
const port=3000;

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(morgan('dev'))

const db = new Pool({
  user: process.env.dbuser,
    password: process.env.dbpassword,
    host: process.env.dbhost,
    port: 22862,
    database: process.env.dbname,
     ssl: {
    ca: `-----BEGIN CERTIFICATE-----
MIIETTCCArWgAwIBAgIUOPpKjInr+4fZb+Bd+yB3lWtuZrgwDQYJKoZIhvcNAQEM
BQAwQDE+MDwGA1UEAww1NTdhYWE5NmQtODY2Ny00MjFkLTgwMTgtMzg1YTFlZTlm
YjU2IEdFTiAxIFByb2plY3QgQ0EwHhcNMjUwNTEwMTQ0MDEwWhcNMzUwNTA4MTQ0
MDEwWjBAMT4wPAYDVQQDDDU1N2FhYTk2ZC04NjY3LTQyMWQtODAxOC0zODVhMWVl
OWZiNTYgR0VOIDEgUHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCC
AYoCggGBAM2jvaQ2Uchesl99qIYs6fWg3oiWwgV0YrEPwRUTvzXFL3iG4Ly9dzo5
R1/lS49SasCQkUl4gmeR1zbA1XP7Y5wmHY7hDM7iIAMREoX2eNTSW5FC+rmeVwar
VXhv4TLNGurQVKcIH8T5pWJ8bYRzsmEuqWJXjUXXF+BBh+U2Bmgrc5CEZfYIgc/D
uJuBJuaKQu1NGlLnbS9oKeBGPWyM9gyFDyCi7XATZUsahlnIWfcVj3zwbYQciTvK
cxoDzV6Fotdi7emrEOw7Mw72SO5XCuCI81qbpupXPvlGpDN4t/WLzyDPzE+/kCn7
HJGgHScIHx3GO4cETi6f8kRuibMM2wTOWaYUWovS6RbasLyREkECVwGyqSootAI8
V6NzkmyuFxGq1m9g08awW/YdpLOlNyGbLgSMCdbSEqMmGWreDjS+6hhlP1t2boyL
qFEre/5k19u9M9Pr/qXXBNmEBWOHc8ZNr+graKLMZVR9oDhW9viO4kw+N7qetGV9
9nFoA7V8wQIDAQABoz8wPTAdBgNVHQ4EFgQUIVQ5IVl/8eAPWWG6q+C5XgONfCAw
DwYDVR0TBAgwBgEB/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGB
AHL0BUduSoKVkBm4/i1Fxn2B4iaXEJg+QQcUCJ5gg63G26ppRB5+IZJKuOVJymaz
+h+MVrfWtuwnjWz9wx3BRX6DJv5s/F8a0iepHsX5CY0d24kmMBzyXZlrrHyrYCjf
iRxunuEU0kBmqbd85mtxGSI2cPrmfa8eNnrjbrqU4ji7N2WrV0Vi9uKsvcCI+TpA
LJQwzkbB/vBS0b2E9b/nKOWQ9B1/twIuXJJVAEmS2O8ZjvRRXs5cehKjR5GD7LjC
mZB0GCFhPUYUX5bp4uMNKWyvq0s02F9BG17jq8X4JilxiYgX8je0pWB0edFxcQYa
KWwm9uMAkfZcjwTpgKJa0wzozeGNuLRabCv8tXNmhNVHGn3MGRS1kqngkP55YEZl
BS0CY6o5HkG3MMTXcKczo/Umke71OoefrZS5HJ1mvtpjPPyYvir8j7V9LhbAz82F
k2Mop6q6rWAri/6h81cD/o1bNt5brGeG9w4DUegAF8qX7+OMAvNFPo7aDXCfa8Cg
mg==
-----END CERTIFICATE-----
`,
    rejectUnauthorized: true
  }
})



app.get("/",async(req,res)=>{
  try{
    const response=await axios.get("https://fakestoreapi.com/products");
    const apiData=response.data;
    for(const product of apiData){
      const { id: productid, title, price, description, category, image, rating } = product;
  const { rate, count } = rating || { rate: 0, count: 0 };
      await db.query("INSERT INTO products VALUES($1,$2,$3,$4,$5,$6,$7,$8)",[productid,title,price,description,category,image,rate,count])
      console.log(response.rows);
    }  
  }
  catch(error){
    console.log(`error message:${error.message}`)
  }
})

app.get("/getDataFromProducts",async(req,res)=>{
  try{
    const response=await db.query("SELECT * FROM products")
    res.status(200).json(response.rows);
  }
  catch(error){
    console.log(`error message : ${error.message}`);
  }
})

app.get("/getProductById/:id",async(req,res)=>{
  const id=req.params.id;
  try{
    const response=await db.query("SELECT * FROM products WHERE productid=$1",[id])
    res.status(200).json(response.rows);
  }
  catch(error){
    console.log(`error message : ${error.message}`);
  }
})

app.post("/addUser",async(req,res)=>{
  const { name,phoneno,username,password }=req.body;
  try{
    await db.query("INSERT INTO auth(name,phoneno,username,password) VALUES($1,$2,$3,$4)",[name,phoneno,username,password]);
    res.status(200).json({ message: "User added successfully" });
  }
  catch(error){
    console.log(`error message:${error.message}`)
    res.status(500).json({ error: "Failed to add user" });
  }
});

app.post("/userLogin",async(req,res)=>{
  const {username,password}=req.body;
  try{
    const response=await db.query("SELECT * FROM auth WHERE username=$1 AND password=$2",[username,password]);
    if(response.rows.length>0){
      res.status(200).json({message:"User logged in successfully.",user:response.rows});
    }
    else{
      res.status(200).json({message:"Invalid username or password"});
    }
  }
  catch(error){
    console.log(`error message:${error.message}`)
    res.status(500).json({ error: "Login failed" });
  }
})

app.post("/addToCart",async(req,res)=>{
  const {userid,productid,quantity}=req.body;
  try{
    await db.query("INSERT INTO cart(userid,productid,quantity) VALUES($1,$2,$3)",[userid,productid,quantity])
    res.status(200).json({message:"product added to cart successfully."});
  }
  catch(error){
    console.log(`error message : ${error.message}`);
  }
})

app.get("/getCartItems",async(req,res)=>{
  const userid=req.query.userid;
  try{
    const response=await db.query("SELECT * FROM cart INNER JOIN products ON cart.productid = products.productid WHERE userid=$1",[userid]);
    res.status(200).json(response.rows)
  }
  catch(error){
    console.log(`error message : ${error.message}`);
  }
})

app.get("/getCartTotal",async(req,res)=>{
  const userid=req.query.userid;
  let totalCost=0;
  try{
    const response=await db.query("SELECT quantity,price FROM cart INNER JOIN products ON cart.productid = products.productid WHERE userid=$1",[userid]);
    response.rows.map((i)=>{
      const price=parseFloat(i.price);
      totalCost+=i.quantity*price;
    })
    res.json({
      totalCost:totalCost,
      totalCount:response.rows.length
    })
  }
  catch(error){
    console.log(`error message : ${error.message}`);
  }
})

app.listen(port,()=>{
    console.log(`Server listening on port ${port}.`)
})