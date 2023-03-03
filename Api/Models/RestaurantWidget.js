const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestaurantWidgetSchema = new Schema({
    _id:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },
    img:{
        type:String,
        required:true,
    }

})

module.exports =mongoose.model('RestaurantWidget',RestaurantWidgetSchema,'RestaurantWidget');
