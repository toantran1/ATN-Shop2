var MongoClient = require('mongodb').MongoClient;
const url = "mongodb+srv://AdminATN:123456ATN@cluster0-bqt2b.mongodb.net/ATN-Shop?retryWrites=true&w=majority";


/// ***************** ***************** *****************
/// ***************** Database & Bảng dữ liệu cần Truy vấn
const NameDataBase = "ATN-Shop";
const NameTable = "Account";


/// --------------------Find-------------------------
// MongoClient.connect(url, { useUnifiedTopology: true })
// .then (client => {
//   var dbo = client.db(NameDataBase);
//   dbo.collection(NameTable).find({}).toArray()
// 	.then (result => {
// 		console.log(result);
// 		client.close();
// 	})
// 	.catch(error => console.error(error));
// })
// .catch(error => console.error(error));

// /// --------------------Insert-------------------------
// MongoClient.connect(url, { useUnifiedTopology: true })
// .then (client => {
//   var dbo = client.db(NameDataBase);
//   var mydata = {
//     User: "1",
//     Password: "2",
//     Permission: "3",
//     Fullname: "4",
//     DateOfBirth: "5",
//     Address: "6",
//     Sex: "7",
//     Phone: "8",
//     Email:"9",
//     CN_id: "10"
//   };
//   dbo.collection(NameTable).insertOne(mydata)
// 	.then (result => {
// 		console.log(result);
// 		client.close();
// 	})
// 	.catch(error => console.error(error));
// })
// .catch(error => console.error(error));




