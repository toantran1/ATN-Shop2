const mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Product_name: String,
    Discription: String,
    Price: Number,
    Product_image: String,
    Inventory: Number,
    Revenue: Number
} , { collection: 'Products' } );

var Product = mongoose.model('Products', productSchema);

module.exports = Product;