/// <AdminATN>  <pzcIA9LJBdMVxuE3>  <ATN-Shop>
/// db("ATN-Shop")
///	collection("Account")

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://AdminATN:pzcIA9LJBdMVxuE3@cluster0-bqt2b.mongodb.net/ATN-Shop?retryWrites=true&w=majority";


// dieu khien truy 
// <, <=, >, >=, !=
// $lt, $lte, $gt, $gte, $ne
var query = {
  Product_name : /.*u.*/,
  Price :{$gte: 5000}
};
//{Price :{$gte: 6000}};
//Price : {$gte :300000}

/// Thay ở đây !!!
MongoClient.connect(
	uri, 
	{ useNewUrlParser: true , useUnifiedTopology: true }
	)
.then (client => {

  var dbo = client.db("ATN-Shop");

var newProduct = {
  Product_name :;
  Discription: ;
  Price : ;
}

// ***innsert
//   dbo.collection("Products").insertOne(newProduct)
// 	.then (results => {
// 		console.log(results);
// 		client.close();
// 	})
// 	.catch(error => console.error(error));
// })
// .catch(error => console.error(error));



  // **** Find
  dbo.collection("Products").findOne
	.then (results => {
		console.log(results);
		client.close();
	})
	.catch(error => console.error(error));
})
.catch(error => console.error(error));

//AdminATN
//c5cRPWjtDGDCzOsR
//Account
//ATN-Shop



// npm install ejs body-parser mongoose cors express-session --save 
// npm install nodemon --save -dev