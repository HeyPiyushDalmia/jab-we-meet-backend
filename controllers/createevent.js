const Createevent=require("../modals/createevent");
 
const create=async (req,res)=>{
    try{
        console.log(req.body);
        const{eventname,eventDescription,targetAudience,audienceNum,ticketPrice}=req.body;

        const userCreated=new Createevent({eventname,eventDescription,targetAudience,audienceNum,ticketPrice});
        await userCreated.save();

        res.status(201).send({msg:"event created succesfully"})
    }
    catch(error)
    {
        res.status(400).send({msg:"failed"})
    }
}
const rep=async(req,res)=>{
    const data=await Createevent.find({});
    res.status(200).json({data});
};
module.exports={create,rep};
