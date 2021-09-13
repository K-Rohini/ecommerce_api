const express=require('express');
const router=express.Router();
const productController=require('../../../controllers/api/v1/product-controller');

router.post('/create',productController.createProduct)
module.exports=router;