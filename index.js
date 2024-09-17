require('dotenv').config();
const express = require("express");
const app = express();
const router = require("./routers/users");
const contactRoute = require("./routers/contact");
const connectDb = require("./utils/db");
const errorMiddleware = require('./middlewares/error-middleware');
const createRoute=require("./routers/createevent")
const cors=require('cors');
app.use(express.json());
app.use(cors());

app.use("/api/users", router);
app.use("/api/form",contactRoute);
app.use("/api/event",createRoute);
app.get("/",(req,res)=>{
    res.status(200).send("Welcome to Mern");
});

// app.get("/register",(req,res)=>{
//     res.status(200).send("Welcome to Register page");
// });


app.use(errorMiddleware);

const PORT =5000;

connectDb().then(()=>{

app.listen(PORT,()=>{
    console.log(`Server is running at port : ${PORT} `);
});
});