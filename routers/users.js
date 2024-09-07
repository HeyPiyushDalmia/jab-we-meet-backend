const express = require("express");
const router = express.Router();
const users = require("../controllers/users");

router.get("/",(req,res)=> {
    res.status(200).send("welcome to user router");
})



// we can use this method also
// router.route("/").get((res,req)=>{
//     res.status(200)
//     .send("Welcome to user router 2")
// })

router.route('/register').post(users.register);

module.exports = router;