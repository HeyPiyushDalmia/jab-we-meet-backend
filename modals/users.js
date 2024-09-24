const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
  firstname : {
    type : String,
    require: true,
  },
  lastname : {
    type : String,
    require: true,
  },
  email :{
    type : String,
    require : true,
  },

  password :{
    type : String,
    require: true,
  },

});


//desecure the password with bcrypt
userSchema.pre("save", async function(next){
// console.log("pre method", this);
const user = this;

if(!user.isModified('password')){
  next();
}

try{
  const saltRound = await bcrypt.genSalt(10);
  const hash_password = await bcrypt.hash(user.password, saltRound);
  user.password = hash_password;

} catch (error){
  next(error);
}

});


// json web token
userSchema.methods.generateToken = async function () {
try{
    return jwt.sign({
      userId: this.id.toString(),
      email: this.email,
      firstname: this.firstname,
      lastname: this.lastname,
    },
  process.env.JWT_SECRET_KEY, {
    expiresIn: "30d", 
  }
  
  );
}catch(error){
  console.error(error);
}
};



//define the modal or the collection name
const User = new mongoose.model("User",userSchema);

module.exports = User;