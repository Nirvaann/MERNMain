const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8000;
const productRoute = require('./routes/product');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/products', productRoute);



mongoose.connect(process.env.MONGO_URL)
.then((e)=> console.log("MongoDB Connected"))
.catch((e)=> console.log(e))

app.listen(PORT , ()=>console.log(`Server started at PORT:${PORT}`));