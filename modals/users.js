const mongoose = require("mongoose");

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

//define the modal or the collection name
const User = new mongoose.model("User",userSchema);

module.exports = User;