const Menu = require('../Model/menuModel');
const Category = require('../Model/CategoryModel')

const createFood = async(req,res)=>{
    const {name,price,category} = req.body;
    if(!name||!price ||!category){
      return  res.status(404).json({
            status:"failed",
            message:"please provide name and price and category"
        })
    }
    console.log(req.body); 
    console.log(req.file); 
     
    
    const data = new Menu({
        name,price,
        category
    })
    if(req.file){
        data.avatar = req.file.path
    }else{
      console.log('nofile')
    }
    try{
        await data.save();
        res.status(200).json({
            status:'success',
            data
        })
    } catch(err){
res.status(400).json({
    message:err.message
})
     }
    
    }
    const updateFood = async(req,res)=>{

        try{
        const updatedData = await Menu.findByIdAndUpdate(req.params.id,{name:req.body.name,price:req.body.price})
        res.status(200).json({
            status:"data updated",
            update: updatedData
        })
        }catch(err){
              res.status(404).json({
                message:err.message
              })
        }
    }
const getAllFoods = async(req,res)=>{
    try{
    const data = await Menu.find();
    res.status(200).json({
        data
    })}catch(err){
        res.status(400).json({
            message:err.message
        })
    }
}
const deleteFood = async(req,res)=>{
    try{

    const deletefood = await Menu.findByIdAndDelete(req.params.id);
    res.status(200).json({
        stauts:"success",
        message:"food deleted",
        data: deleteFood
    })
    }catch(err){
        res.status(404).json({
            message:err.message
        })
    }
}
const foodByCategory = async (req, res) => {
    const { categoryName } = req.params;
    if (!categoryName) {
    
        return res.status(400).json({
            status: "failed",
            message: "Please provide a category name"
        });
    }

    try {
       
        const data = await Menu.find({
            "category.categoryName": categoryName
        });

        if (!data.length) {
            return res.status(404).json({
                status: "failed",
                message: `No food items found for category: ${categoryName}`
            });
        }

        res.status(200).json({
            status: "success",
            data
        });
    } catch (err) {
        res.status(400).json({
            status: "failed",
            message: err.message
        });
    }
};
module.exports={createFood,getAllFoods,foodByCategory,updateFood,deleteFood}