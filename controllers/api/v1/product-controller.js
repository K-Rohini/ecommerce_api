const ProductModel=require("../../../models/Product");

module.exports.createProduct=async(req,res)=>{
    try{
        const data=req.body || {};
        res.status(200).json({msg:"Product is created successfully",data:data});
    }catch(error){
        console.log("Error in creating product"+error);
        res.status(500).json({msg:"Internal Server Error"});
    }
};

