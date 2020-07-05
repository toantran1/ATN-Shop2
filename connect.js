var MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://toan:toangay@cluster0-zf49w.mongodb.net/ATN_shop?retryWrites=true&w=majority";

ObjectId = require('mongodb').ObjectID;


/// ***************** ***************** *****************
/// ***************** Database & Bảng dữ liệu cần Truy vấn


const NameDataBase = "ATN_shop";
//const NameTable = "Account";

///pass: toangay
// /// --------------------Find-------------------------
// MongoClient.connect(uri, { useUnifiedTopology: true })
// .then (client => {
//   var dbo = client.db(NameDataBase);
//   dbo.collection("Bill").find({}).toArray()
// 	.then (result => {
//         //console.log(result);
//         console.log(result.length);
//         console.log("--------------");
//         console.log(result);
//         // for(var i= 0; i < result.length; i++)
//         // {
//         //     var bodyy = result[i].User;
//         // console.log(bodyy);
//         // }
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



// /// --------------------Query(login)-------------------------
// MongoClient.connect(url, { useUnifiedTopology: true })
// .then (client => {
//   var dbo = client.db(NameDataBase);
//     var query = {
//         User: "admin",
//         Password:"123456"
// };

//   dbo.collection(NameTable).find(query).toArray()
// 	.then (result => {
//         //console.log(result);
//         console.log(result.length)
//         console.log("--------------");
//         for(var i= 0; i < result.length; i++)
//         {

//         console.log(result[i].User);
//         console.log(result[i].Password);
//         }
// 		client.close();
// 	})
// 	.catch(error => console.error(error));
// })
// .catch(error => console.error(error));

// //Id(demo)= 5ef00bcfbbb0ff3ffb2be1b3
// /// --------------------Query(FindID)-------------------------
// MongoClient.connect(url, { useUnifiedTopology: true })
// .then (client => {
//   var dbo = client.db(NameDataBase);
//   var id = "5ef00bcfbbb0ff3ffb2be1b3";// se thay doi o day
//     var query = {
//       _id : ObjectId(id) // se thay doi o day
// };

//   dbo.collection("Products").find(query).toArray()
// 	.then (result => {
//         console.log(result);
//         console.log(result.length)
//         console.log("--------------");

//         // for(var i= 0; i < result.length; i++)
//         // {
//         var i = 0;
//         console.log("Name " + result[i].Product_name);
//         console.log("Discription " + result[i].Discription);
//         console.log("Price " + result[i].Price);
//         console.log("Img "  + result[i].Product_image);
//         console.log("Inventory " + result[i].Inventory);
//         console.log("Revenue " + result[i].Revenue);
//         //}
// 		client.close();
// 	})
// 	.catch(error => console.error(error));
// })
// .catch(error => console.error(error));



/// --------------------Query(FindID)-------------------------
MongoClient.connect(uri, { useUnifiedTopology: true })
.then (client => {
  var dbo = client.db(NameDataBase);

  dbo.collection("Account").find({}).toArray()
      .then (result => {
          //ahha
          console.log(result);
          client.close();
      })
      .catch(error => console.error(error));
})
.catch(error => console.error(error)); 


/// --------------------Insert for Payment-------------------------
// function InsertForPayment()
// {
//     MongoClient.connect(uri, { useUnifiedTopology: true })
//     .then (client => {
//       var dbo = client.db(NameDataBase);
//       var mydata = {
//         Product_id:'P002, P003',
//         User_id:"5ef85267e23742be814567ad",
//         Price_all:8000,
//         Date:'27/7/2020',
//       };
//       dbo.collection("Bill").insertOne(mydata)
//         .then (result => {
//             console.log(result);
//             client.close();
//         })
//         .catch(error => console.error(error));
//     })
//     .catch(error => console.error(error));
// }



// /// --------------------update for Payment-------------------------
// MongoClient.connect(uri, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   var myquery = { _id: ObjectId("5ef95015b98bdb447f4924f4") };
//   var newvalues = { $set: {
//       User: "test" , 
//       Password: "123456",
//       Permission: "starf" ,
//       Fullname: "body.Fullname" ,
//       DateOfBirth: "body.DateOfBirth" ,
//       Address: "body.Address" ,
//       Sex: "body.Sex" ,
//       Phone: "4563" ,
//       Email: "body.Email" ,
//       CN_id: "body.CN_id"
//   } };
//   dbo.collection("Account").updateOne(myquery, newvalues, function(err, res) {
//     if (err) throw err;
//     console.log("1 document updated");
//     db.close();
//   });
// });


// /// --------------------Query(FindID)-------------------------
// MongoClient.connect(uri, { useUnifiedTopology: true })
// .then (client => {
//   var dbo = client.db(NameDataBase);
//   var id = "5ef95015b98bdb447f4924f4";// se thay doi o day
//       var query = {
//       _id : ObjectId(id)
//   };

//   dbo.collection("Account").deleteOne(query)
//       .then (result => {
//           //ahha
//           console.log("deleted");
//           client.close();
//       })
//       .catch(error => console.error(error));
// })
// .catch(error => console.error(error)); 
