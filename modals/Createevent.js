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
        type:String,
        require:true
    },
    type:{
        type:String,
        enum: ['In Person', 'Virtual'],
        default:'InPerson',
        require:true
    },
    attendees:{
        type:Number,
        require:true
    },
    ticketPrice:{
        type:Number,
        require:true
    },
    tech:{
        type:String,
        enum: ['Yes', 'No','Not Sure'],
        default:'Yes',
        require:true
    },
    agenda:{
        type:String,
        require:true
    },
    hostname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    eventdate:{
        type:String,
        require:true,
    },
  
    country:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    state:{
        type:String,
        require:true
    },
    postal:{
        type:Number,
        require:true
    },
    twitter:{
        type:String,
        default:'Unknown',
    },
    linkedin:{
        type:String,
        default:'Unknown',
    },
    website:{
        type:String,
        default:'Unknown',
    },
    instagram:{
        type:String,
        default:'Unknown',
    }
});

const Createevent =new mongoose.model("Createevent",createeventSchema);

module.exports= Createevent;