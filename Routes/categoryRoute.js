const { createCategory } = require('../Controllers/categoryController');

const catRoute = require('express').Router();

catRoute.post('/createcategory',createCategory)
module.exports= catRoute;