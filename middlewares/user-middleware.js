const jwt = require("jsonwebtoken");


const userMiddleware = async (req,res,next) => {

const token = req.header("Authorization");


if (!token) {
    // if you attempt to use an expired token you will recieve a 401 unauthorized HTP response
    return res.status(401).json({message: "Unathorized HTTP, Token not provided"});
}
console.log("token from user-middleware", token);

//assuming token is in the format " Baearer <jwt token>"

const jwtToken = token







next();
}


module.exports = userMiddleware;