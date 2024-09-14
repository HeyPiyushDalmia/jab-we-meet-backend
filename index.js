require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./routers/users");
const contactRoute = require("./routers/contact");
const connectDb = require("./utils/db");
const errorMiddleware = require('./middlewares/error-middleware');

//lets tackle cors

const corsOptions = {
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials: true,
}

app.use(cors(corsOptions));


app.use(express.json());


app.use("/api/users", router);
app.use("/api/form",contactRoute);


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