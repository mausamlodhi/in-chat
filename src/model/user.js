module.exports = (mongoose)=>{
    const userSchema = mongoose.Schema(
        {
            firstName:{
                type:String,
                allowNull:false
            },
            lastName:{
                type:String,
                allowNull:false
            },
            email:{
                type:String,
                allowNull:false
            },
            phoneNumber:{
                type:String,
                allowNull:false
            },
            password:{
                type:String,
                allowNull:false
            },
            profileImage:{
                type:String,
                allowNull:true
            },
            refreshToken:{
                type:String,
                allowNull:true
            },
            fcmToken:{
                type:String,
                allowNull:true
            },
            isVarified:{
                type:Boolean,
                default:false,
                allowNull:true
            },
            createdAt:{
                type:Date,
                default: Date.now
            }
        }
    );
    return mongoose.model('user',userSchema);
};