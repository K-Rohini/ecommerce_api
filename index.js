const express=require('express');
const dotenv = require('dotenv').config();
const port=process.env.PORT;
const app=express();
const db=require('./config/mongoose');

app.use(express.json());
app.use('/',require("./routes"));

// app.get('/ping',(req,res)=>{
//     return res.send({
//         message:"working"
//     })
// })
// start server
app.listen(port,()=>console.log("Started running on port "+port));

