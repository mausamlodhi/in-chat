import { Router } from "express";
import user from "./user.routes";

const router = Router();
const register = (app)=>{
    app.use(router);
    app.use('/api',[
        user,
        
    ]);
    app.use((err,req,res,next)=>{
        if(err){
            res.status(500).json({
                success:false,
                message:res.__('INTERNAL_SERVER_ERROR_MESSAGE'),
                error:err,
                data:null
            })
        }
    })
};
export default register;