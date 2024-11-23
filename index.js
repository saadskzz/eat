const express = require('express');
const mongoose = require('mongoose');

const router = require('./Routes/foodRoute');
const catRoute = require('./Routes/categoryRoute');
require('dotenv').config();
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage });
const app = express();
app.use(express.json());


mongoose.connect(process.env.URL);
const db = mongoose.connection;
db.once('connected',()=>{
    console.log('database connected')
})

  
app.use('/api/v1',router);
app.use('/api',catRoute);
const url = process.env.URL

app.listen(3000,()=>{
    console.log('app running on port',3000)
})