const RestaurantWidgetSchema = require('./../Models/RestaurantWidget.js')

exports.DisplayHomePg = (req,res)=>{
        RestaurantWidgetSchema.find().
        then(result=>{
            res.status(200).json({
                result,
            })
        }).catch(err =>{
            res.status(400).json({
                error:err
            })
        })
}

