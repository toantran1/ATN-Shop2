const mongoose = require('mongoose');

var billSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    Product_id: String,
    Num: String,
    User_id: String,
    Price_all: Number,
    Day: Number,
    Month: Number,
    Year: Number
} , { collection: 'Bill' } );

var Bill = mongoose.model('Bill', billSchema);

module.exports = Bill;