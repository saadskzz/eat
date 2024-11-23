const Category = require('../Model/CategoryModel');
const { castObject } = require('../Model/menuModel');

const createCategory = async(req,res)=>{
    const {categoryName} = req.body;
    if(!categoryName){
     return   res.status(400).json({
            status:'fail',
            message:"category required"
        })
    }
    const data = new Category({
        categoryName
    })
    try{
        await data.save()
        res.status(200).json({
            data
        })
    }catch(err){
        res.status(400).json({
            message : err.message
        })

    }

    
}
module.exports= {createCategory}