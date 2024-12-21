module.exports = (mongoose)=>{
    const categorySchema = mongoose.Schema({
        categoryName:{
            type:String,
            required:true
        }
    });
    return mongoose.model('category',categorySchema);
}