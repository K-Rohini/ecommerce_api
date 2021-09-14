const ProductModel=require("../../../models/Product");
const { validationResult } = require('express-validator');

//Creating Product
module.exports.createProduct=async(req,res)=>{
    try{
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array() });
        }
        const data=await ProductModel.create(req.body);
        res.status(200).json({msg:"Product is created successfully",data:data});
    }catch(error){
        console.error("Error in creating product"+error);
        res.status(500).json({msg:"Internal Server Error"});
    }
};


//Get the Product
module.exports.getProduct=async(req,res)=>{
    try{
        const data=await ProductModel.find({});
        res.status(200).json({msg:"Products",data:data});
    }catch(error){
        console.error("Error in getting product"+error);
        res.status(500).json({msg:"Internal Server Error"});
    }
};

//Delete a product 
module.exports.deleteProduct=async(req,res)=>{
    try{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
        }
        const data=await ProductModel.findByIdAndDelete(req.params["id"]);
        if(!data){
            res.status(400).json({msg:"Given id with product is not found."});
        }
        else{ 
        res.status(200).json({msg:"Product Deleted",data:data});
        }
    }catch(error){
        console.error("Error in Deleting product"+error);
        res.status(500).json({msg:"Internal Server Error"});
    }
};

module.exports.updateProduct=async(req,res)=>{
    try{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
        }
        const data=await ProductModel.findByIdAndUpdate(
            req.params["id"],
            req.body,
            {new:true}
            );
        if(!data){
            res.status(400).json({msg:"Given id with product is not found."});
        }
        else{ 
        res.status(200).json({msg:"Updation Successful",data:data});
        }
        
    }catch(error){
        console.error("Error in Updating product"+error);
        res.status(500).json({msg:"Internal Server Error"});
    }
};



