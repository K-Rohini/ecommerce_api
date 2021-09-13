const express=require('express');
const dotenv = require('dotenv').config();
const port=process.env.PORT;
const app=express();
const db=require('./config/mongoose');
app.use('/',require("./routes/intial"));


// start server
app.listen(port,()=>console.log("Started running on port "+port));

