const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const PaytmCheckSum =require('./PaytmChecksum')
mongoose.set("strictQuery", false);
const routes=require('./Route/route');
const app = express();
// CORS
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization');
    next();
})
app.use(express.json())
app.use('/',routes);

mongoose.connect('mongodb://127.0.0.1:27017/RestaurantWidget',{useNewUrlParser:true,useUnifiedTopology:true})
.then(client =>{
    app.listen(8050,'localhost',()=>{
        console.log(`server running on http://localhost:${8050}`);
    });
}).catch(err =>{
    console.log(err);
});