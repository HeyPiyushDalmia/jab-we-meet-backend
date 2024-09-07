require('dotenv').config();
const express = require("express");
const app = express();
const router = require("./routers/users");
const connectDb = require("./utils/db")

app.use(express.json());


app.use("/api/users", router);



app.get("/",(req,res)=>{
    res.status(200).send("Welcome to Mern");
});

// app.get("/register",(req,res)=>{
//     res.status(200).send("Welcome to Register page");
// });


const PORT =5000;

connectDb().then(()=>{

app.listen(PORT,()=>{
    console.log(`Server is running at port : ${PORT} `);
});
});