const Createevent= require("../modals/createevent");
 
const create=async (req,res)=>{
    try{
        console.log(req.body);
        const{eventname,description,audience,type,attendees,ticketPrice,tech,agenda,hostname,eventdate,email,country,address,city,state,postal,twitter,linkedin, website,instagram}=req.body;

        const eventCreated=new Createevent({eventname,description,audience,type,attendees,ticketPrice,tech,agenda,hostname,eventdate,email,country,address,city,state,postal,twitter,linkedin, website,instagram});
        await eventCreated.save();

        res.status(201).send({msg:"event created succesfully"})
    }
    catch(error)
    {
        res.status(400).send({msg:"Event is not created due to some technical issues. Please try again later",error})
    }
}
const rep=async(req,res)=>{
    try {
         const response=await Createevent.find({});
         if (!response) {
            res.status(404).json({msg:"No Events found"});
            return;
         }
    res.status(200).json({response});
    } catch (error) {
        console.log(`events : ${error}`);
    }
};
module.exports= {create,rep};
