const Createevent= require("../modals/createevent");
 
const create=async (req,res)=>{
    try{
        console.log(req.body);
        const{eventname,description,audience,type,attendees,ticketPrice,tech,agenda,hostname,eventdate,email,country,address,city,state,postal,twitter,linkedin, website,instagram}=req.body;

        const userCreated=new Createevent({eventname,description,audience,type,attendees,ticketPrice,tech,agenda,hostname,eventdate,email,country,address,city,state,postal,twitter,linkedin, website,instagram});
        await userCreated.save();

        res.status(201).send({msg:"event created succesfully"})
    }
    catch(error)
    {
        res.status(400).send({msg:"Event is not created due to some technical issues. Please try again later"})
    }
}
const rep=async(req,res)=>{
    const data=await Createevent.find({});
    res.status(200).json({data});
};
module.exports={create,rep};
