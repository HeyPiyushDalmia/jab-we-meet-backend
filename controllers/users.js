const User = require("../modals/users");


const register = async (req,res) =>{
    try {
        // console.log(req.body);
        const {firstname, lastname, email, password} = req.body;

        const userExist =  await User.findOne({email:email});

        if(userExist)
            {
                return res.status(400),json({msg: "user with this email id is already registered"});
            }

             const userCreated = await User.create({username, email, phone, password});
        res.status(200).json({message: userCreated});
    } catch (error)
    {
        res.status(500).json({message:"Internal server error"})
    }

}

module.exports = {register};