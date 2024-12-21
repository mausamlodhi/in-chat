module.exports = (mongoose)=>{
    const stateSchema = mongoose.Schema({
        stateName:{
            type:String,
            required:true
        }
    });
    return mongoose.model('state',stateSchema);
}