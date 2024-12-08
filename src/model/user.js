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
            phonbeNumber:{
                type:String,
                allowNull:false
            },
            refreshToken:{
                type:String,
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