import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import { Pool } from 'pg';

const app=express();
const port=3000;

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(morgan('dev'))

const db = new Pool({
  host:"localhost",
  user:"postgres",
  password:"5432",
  database:"NileCart",
  port:5432,
})

app.get("/",async(req,res)=>{
  try{
    const response=await db.query("SELECT * FROM auth");
    console.log(response.rows);
  }
  catch(error){
    console.log(`error message:${error.message}`)
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

app.listen(port,()=>{
    console.log(`Server listening on port ${port}.`)
})