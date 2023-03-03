const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const RestauranMenuSchema = new Schema({
    _id:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    cityname:{
        type:String,
        required:true,
    },
    city:{
        type:Number,
        required:true,
    },
    area:{
        type:Number,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    thumb:{
        type:String,
        required:true,
    },
    cost:{
        type:String,
        required:true,
    },
    contact_number:{
        type:String,
        required:true,
    }
})
module.exports =mongoose.model('RestaurantMenu',RestauranMenuSchema,'RestaurantMenu');