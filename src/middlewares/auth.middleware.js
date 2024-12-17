import httpStatus from "http-status";
import repositories from "../repository";
import { showConsole } from "../utility";

const { userRepository } = repositories;
export default {
    async checkUser(req,res,next){
        try{
            const {
                body:{
                    email,
                }
            } = req;
            const user = await userRepository.checkUser({email});
            if(user?._id){
                return res.status(httpStatus.BAD_REQUEST).json({
                    status:false,
                    data:null,
                    message:"USER_ALREADY_EXISTS"
                });
            }else{
                next();
            }
        }catch(error){
            showConsole(error);
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                status:false,
                data:null,
                message:'INTERNAL_SERVER_ERROR',
                error
            })
        }
    }
}