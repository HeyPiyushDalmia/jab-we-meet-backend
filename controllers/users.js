const User = require("../modals/users");
const bcrypt = require("bcryptjs");


//registration 
const register = async (req, res) => {
    try {
        console.log(req.body);
        const { firstname, lastname, email, phone, password } = req.body;

        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(400).json({ msg: "This email id is already registered" });
        }

        // hash the password (best way described in the users modal)
        // const saltRound = 10;
        // const hash_password = await bcrypt.hash(password, saltRound);


        const userCreated = new User({ firstname, lastname, email, phone, password  });
        await userCreated.save();

        res.status(201).json({ message: "Registeration successful", token: await userCreated.generateToken(), userId : userCreated.id.toString() });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};



// user login

const login = async function (req,res) {
    try{
        const {email, password} = req.body;
        const userExist = await User.findOne({email});

        if(!userExist){
            return res.status(400).json({message:"Invalid Credentials"});
        }

        const isPasswordValid = await bcrypt.compare(password, userExist.password);
        if(isPasswordValid){
            res.status(200).json({ message: "Login successful", token: await userExist.generateToken(), userId : userExist.id.toString() }); 
        }else{
            res.status(401).json({message:"Invalid Email or Password"});
        }


    }catch(error){
        // res.status(500).json({message:"Internal server error"});
        // console.log(error);
        next(error);
    }
};


//to send user data

const user = async(req,res)=>{
try {
    const userData = req.user;
    console.log(userData);
   return  res.status(200).json({msg: userData});
} catch (error) {
    console.log("Error from the user route");
}
}



module.exports = { register, login, user};
