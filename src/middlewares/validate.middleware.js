import httpStatus from "http-status";

const validateRequest = (options)=> async(req,res,next)=>{
    try{
        await options.schema.validateAsync({
            ...req.body,
            ...req.query,
            ...req.params
        });
        next();
    }catch(error){
        const errors = [];
        if(error.isJoi){
            error.details.forEach((errorData)=>{
                const errorObject = {
                    message : errorData.message,
                    field : errorData.path.join('_'),
                    type : errorData.type
                };
                errors.push(errorObject);
            });
            return res.status(httpStatus.BAD_REQUEST).json({
                success : false,
                error : errors,
                message : ""
            });
        }
    }
};

export default validateRequest;