// const { default: mongoose } = require('mongoose');
const orderModel=require('../models/orderModels')
const productModel= require('../models/productModel')




//Create order=/api/v1/order

exports.createOrder= async(req,res,next)=>{

// console.log(req.body, 'DATA')

const cardItems= req.body;
const amount=Number(cardItems.reduce((acc ,item)=>(acc +item.product.price * item.qty),0).toFixed(2))

const status='pending';

const order=await orderModel.create({cardItems,amount,status})

//Updateing Product Stock

cardItems.forEach(async (item)=>{
    const product = await productModel.findById(item.product._id)
    product.stock =product.stock - item.qty;
    await product.save()

})







    res.json({
        sucess:true,
        order
       
    })

}


