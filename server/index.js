import express from "express";
import cors from "cors";
import morgan from "morgan";
import { Pool } from "pg";

const port=3000;
const app=express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());


const pool=new Pool({
    user:"postgres",
    host:"localhost",
    database:"NileCart",
    password:"5432",
    port:"5432"
})

app.get("/users",async(req,res)=>{
    try{
        const response=await pool.query("SELECT * FROM users");
        res.json(response.rows)
    }
    catch(error){
        console.log(`error message:${error.message}`)
    }
})

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})