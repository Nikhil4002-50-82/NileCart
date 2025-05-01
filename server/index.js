import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import axios from "axios";

const app=express();
const port=5000;

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get("/getAllProducts",async(req,res)=>{
    try{
        const response=await axios.get("https://fakestoreapi.com/products");
        const data=response.data;
        res.json(data);
    }
    catch(error){
        console.log(`error message : ${error.message}`)
    };
})



app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})