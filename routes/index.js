const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>"<div> https://github.com/K-Rohini/ecommerce_api.git </div>")

router.use("/api",require("./api"));

module.exports = router;