const Contact = require("../modals/contact");

const ContactForm = async (req,res) =>{
    try{
        const response = req.body;
        await Contact.create(response);
        return res.status(200).json({message:"your query has been submitted successfully"});

    }catch(error){
                return res.status(500).json({message:"your query has not been submitted"});
    }
};

module.exports = ContactForm;


