const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>res.send("<div>https://github.com/K-Rohini/ecommerce_api</div>"))

router.use("/api",require("./api"));

module.exports = router;