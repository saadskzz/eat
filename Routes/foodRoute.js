const  {createFood,getAllFoods, foodByCategory, updateFood, deleteFood} = require('../Controllers/FoodController');

const upload = require('../Middleware/upload')
const router = require('express').Router();


router.post('/createfood',upload.single('avatar'),createFood);
router.get('/getallfoods',getAllFoods);
router.get('/getallfoods/:categoryName',foodByCategory);
router.patch('/updatefood/:id',updateFood)
router.delete('/deletefood/:id',deleteFood)
module.exports= router;