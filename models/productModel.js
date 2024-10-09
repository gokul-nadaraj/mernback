const mongoose=require('mongoose');

const productShema=new mongoose.Schema({
    name:String,
    price:String,
    description:String,
    ratings:String,

    image:[
        {
            image:String
        }
    ],
    
    category:String,
    seller:String,
    stock:String,
    numofReviews:String,
    createdAt:Date



});

 const productModel=mongoose.model('product',productShema);

 module.exports=productModel;