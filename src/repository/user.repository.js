import bcrypt from "bcryptjs";
import models from "../model";
import { showConsole } from "../utility";
const { user } = models;

export default {
    
    async checkUser(data){
        try{
            const isUserExists = await user.findOne({email:data?.email});
            return isUserExists;
        }catch(error){
            showConsole(error);
            throw new Error(error);
        }
    },
    async userSignup(data){
        try{
            const salt = await bcrypt.genSalt();
            const hashedPassword = await bcrypt.hash(data.password,salt);
            data.password = hashedPassword;
            const newUser = await user.create(data);
            return newUser;
        }catch(error){
            showConsole(error);
            throw new Error(error);
        }
    },
    async getAllUsers(){
        try{
            const users = await user.find().populate([
                {
                    path:'city',
                    select:'cityName'
                },
                'state'
            ]);
            return users;
        }catch(error){
            showConsole(error);
            throw new Error(error);
        }
    }
}