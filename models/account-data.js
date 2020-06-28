const mongoose = require('mongoose');

var accountSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    User: String,
    Password: String,
    Permission: String,
    Fullname: String,
    DateOfBirth: String,
    Address: String,
    Sex: String,
    Phone: String,
    Email: String,
    CN_id: String

} , { collection: 'Account' } );

var Account = mongoose.model('Account', accountSchema);

module.exports = Account;