module.exports = (mongoose)=>{
    const productSchema = mongoose.Schema({
        productName:{
            type:String,
            required:true
        },
        quantity:{
            type:Number,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        category:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'category',
            required:true
        }
    });
    return mongoose.model('product',productSchema);
}