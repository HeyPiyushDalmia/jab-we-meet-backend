const mongoose=require("mongoose");

const createeventSchema= new mongoose.Schema({
    eventname:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    audience:{
        type:String
    },
    type:{
        type:String
    },
    audienceNum:{
        type:Number
    },
    ticketPrice:{
        type:Number
    },
    agenda:{
        type:String,
    },
    hostName:{
        type:String
    },
    contactEmail:{
        type:String
    },
    country:{
        type:String
    },
    streetAddress:{
        type:String
    },
    city:{
        type:String
    },
    state:{
        type:String
    },
    postalCode:{
        type:Number
    },
    twitter:{
        type:String
    },
    linkedin:{
        type:String
    },
    website:{
        type:String
    },
    instagram:{
        type:String
    }
});

const Createevent=new mongoose.model("Createevent",createeventSchema);

module.exports=Createevent;