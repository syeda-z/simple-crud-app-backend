const Product = require('../models/product.model.js');//product model
const getProducts = async (req,res)=>{
    //displays all the product details
    try {
    const products = await Product.find({});
    res.status(200).json(products);
     } catch (error) {
    res.status.json({ message: error.message });
     }
 };

const getProduct = async (req,res)=>{
    //finding single product using id
    try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
    } catch (error) {
    res.status(500).json({ message: error.message });
    }
};

const createProduct = async (req,res)=>{
    //posting products to db
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProduct = async (req,res)=>{
    //updating a product
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      return res.status(404).json({ message: "product not found" });
    }
    const updatedProduct = await Product.findById(id);

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

};

const deleteProduct = async (req,res)=>{
    //deleting a product
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: "product not found" });
    }

    res.status(200).json({ message: "product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



 module.exports = {
    //pass a list of what to be exported to product.route.js
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct

 };
