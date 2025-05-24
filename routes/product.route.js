const express = require("express");
const router = express.Router();
const Product = require("../models/product.model.js");
const {getProducts,getProduct, updateSingleProduct, createProduct, deleteProduct, updateProduct} = require('../controllers/product.controller.js');


//displays all products
 router.get('/',getProducts);
//finds one product
 router.get('/:id',getProduct);
//creates a product
 router.post('/', createProduct);
//updates the product
 router.put('/:id', updateProduct);
//deletes a product
 router.delete('/:id', deleteProduct)

 module.exports= router;
//exporting the routes to index.js
