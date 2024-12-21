module.exports = (mongoose)=>{
    const citySchema = mongoose.Schema({
        name:{
            type:String,
            required:true,
        },
        state:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'state',
            required:true
        }
    });
    return mongoose.model('city',citySchema);
}