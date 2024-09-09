
const validate = (schema) => async(req,res,next)=>{
try{
const parseBoady = await schema.parseAsync(req.body);
res.body = parseBoady;
next();
}catch(err){
    const status = 422;
    const message = "Fill the data properly";
    console.log(err);
    const extraDetails = err.issues[0].message;
    
    const error = {
        status,
        message,
        extraDetails,
    };


    console.log(error,"piyuah");
    // res.status(400).json({msg: message});
    next(error);
}
};



module.exports = validate; 