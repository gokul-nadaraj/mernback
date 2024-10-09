const express=require("express")
const { createOrder } = require("../controller/Ordercontroller")

const router=express.Router()

router.route('/order').post(createOrder)


module.exports=router