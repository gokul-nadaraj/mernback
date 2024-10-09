

const productModel=require('../models/productModel')





//Get products API -/api/v1/products

exports.getProducts = async (req,res,next)=>{

const query=req.query.keyword?{name:{
    $regex:req.query.keyword,
    $options:'i'

}}:{}

const products=await productModel.find(query);


    res.json({
    sucess:true,
    products

    })

}

//Get products API -/api/v1/products/:id
exports.getSingleProduct = async(req,res,next)=>{

    console.log(req.params.id, 'ID')

try {
    const product=await productModel.findById(req.params.id);
    res.json({
        sucess:true,
       product

    })
} catch (error) {
    
    res.json({
        sucess:false,
       message:"unable to get product"

    })
}
  
    






}