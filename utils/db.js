const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;


const connectDb = async () =>
    {
        try{
            mongoose.connect(URI);
            console.log("Connection successful to the DB");
        } catch(error){
            console.error("database connection failed");
            process.exit(0);
        }
    };

    module.exports = connectDb;