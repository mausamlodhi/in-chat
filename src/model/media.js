module.exports = (mongoose)=>{
    const mediaSchema = mongoose.Schema({
        name:{
            type:String,
            required:true
        },
        basePath:{
            type:String,
            required:true
        },
        mediaType:{
            type:String,
            required:true
        },
        mediaFor:{
            type:String,
            required:true
        },
        fileType:{
            type:String
        }
    });
    return mongoose.model('media',mediaSchema);
}