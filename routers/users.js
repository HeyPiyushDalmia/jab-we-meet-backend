const express = require("express");
const router = express.Router();
const users = require("../controllers/users");
const {signupSchema} = require("../validators/user-validator");
const {loginSchema} = require("../validators/user-validator");
const validate = require("../middlewares/validate-middlware");
const userMiddleware = require("../middlewares/user-middleware");
router.get("/",(req,res)=> {
    res.status(200).send("welcome to user router");
})



// we can use this method also
// router.route("/").get((res,req)=>{
//     res.status(200)
//     .send("Welcome to user router 2")
// })

router.route('/register')
.post(validate(signupSchema), users.register);

router.route('/login').post(users.login);

router .route('/user').get(userMiddleware, users.user);

module.exports = router;