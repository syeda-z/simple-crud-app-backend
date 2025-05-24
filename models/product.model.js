const mongoose = require('mongoose');
//creating a schema for the products to be stored into the DB
const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "please enter product name"],

        },

        quantity: {
            type: Number,
            required: true,
            default: 0
        },

        price: {
            type: Number,
            required: true,
            default: 0
        },

        image: {
            type: String,
            required: false
        }

    },
    {
        timestamps: true
    }
);
//exporting the model
const Product = mongoose.model("Product",ProductSchema);
module.exports=Product;
