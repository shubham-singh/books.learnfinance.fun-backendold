const express = require('express');
const mongoose = require('mongoose');
const dbConnect = require('./db/db.connect.js');
const cors = require('cors');

const Product = require('./models/product.model.js');

const app = express();


// Connecting to databse
dbConnect();

app.use(cors());

app.use(express.json());

app.get('/', async (req, res) => {
  try {
    const products = await Product.find({});
    res.json({success: true, products});
  } catch(err) {
    res.json({success: false, errorMessage: err.message});
  }
})

app.post('/', async (req, res) => {
  try {
    const product = req.body;
    const NewProduct = new Product(product);
    const savedProduct = await NewProduct.save();
    res.json({success: true, product: savedProduct})
  } catch(err) {
    res.status(500).json({
      success: false,
      message: 'Unable to add product',
      errorMessage: err.message  
    })
  }
})


app.listen(3000, () => console.log('server started'));