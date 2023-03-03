const RestaurantMenuSchema = require('./../Models/RestaurantMenu.js')

exports.DisplayMenuData =(req,res)=>{
    RestaurantMenuSchema.find()
    .then(result=>{
        res.status(200).json({
            res:result
        })
    }).catch(err =>{
        res.status(400).json({
            error:err
        })
    })
}

exports.filterResturants =(req,res)=>{
    let {mealtype,name,cuisinename,page,sort,costype,city_name,cost}=req.body
    page=page? page :1; 
    sort=sort?sort:1;
 
    let Payload={}
    const itemsPage = 2;
 
    let startIndex = itemsPage * page - itemsPage;
    let endIndex = itemsPage * page;

    if(city_name){
     Payload['city_name'] = city_name;
    }
    if(cuisinename){
        Payload['Cuisine.cuisinename'] ={$in:cuisinename}
    }
    if(costype){
        Payload['costype']={$in:costype}
    }
    if(mealtype && cuisinen && city_name){
     Payload['type.mealtype'] =mealtype;
     Payload['city_name'] = city_name;
     Payload['Cuisine.cuisinename'] ={$in:cuisinename}
    }
    if(mealtype && cuisinen && city_name && costype){
        Payload['type.mealtype'] =mealtype;
        Payload['city_name'] = city_name;
        Payload['Cuisine.cuisinename'] ={$in:cuisinename}
        Payload['costype']={$in:costype}
    }

     RestaurantMenuSchema.find(Payload).sort({cost:sort})
     .then(response =>{
         const filterResponse = response.slice(startIndex, endIndex)
         res.status(200).json({
             mesaage:'Fetched Successfully',
             restaurants:filterResponse
         })
     }).catch(err =>{
         res.status(400).json({
             error:err
         })
     })
 }