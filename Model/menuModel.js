const mongoose = require('mongoose');
const CategoryModel= require('./CategoryModel')
const FoodSchema = new mongoose.Schema({
  name:{
    type:String,
    required: true,
    unique:true
  },

    price:{
        type: Number,
        required:true
    }
    ,
    avatar:{
      type:String
    },
    category:[]
})
FoodSchema.pre('save',async function(next){
  const foodPromise = this.category.map(async id=> CategoryModel.findById(id));
  this.category= await Promise.all(foodPromise);
  next()
})

module.exports = mongoose.model('Food',FoodSchema);