const jwt = require("jsonwebtoken");

const User = require("../modals/users")


const userMiddleware = async (req,res,next) => {

const token = req.header("Authorization");


if (!token) {
    // if you attempt to use an expired token you will recieve a 401 unauthorized HTP response
    return res.status(401).json({message: "Unathorized HTTP, Token not provided"});
}

//assuming token is in the format " Baearer <jwt token>"

const jwtToken = token.replace("Bearer", "").trim();
console.log("token from user-middleware", jwtToken);

try {

    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);

    
    const userData = await User.findOne({email:isVerified.email}).select({
        password : 0,
    });
    console.log(userData);

    req.user = userData;
    req.token = token;
    req.UserId = userData._id; 
    
    next();

} catch (error) {
    return res.status(401).json({message: "Unathorized. Invalid Token."});
    
}

};


module.exports = userMiddleware;