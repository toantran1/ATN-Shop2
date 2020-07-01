var MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://AdminATN:123456ATN@cluster0-bqt2b.mongodb.net/ATN-Shop?retryWrites=true&w=majority";


//const uri = "mongodb+srv://db03:aGBZRta11CBmt8qL@cluster0-q8a6f.mongodb.net/CloudDB?retryWrites=true&w=majority";

ObjectId = require('mongodb').ObjectID;

//const NameDataBase =  "atnshop"; // "CloudDB";

/// ***************** ***************** *****************
/// ***************** Database & Bảng dữ liệu cần Truy vấn
// const NameDataBase = "ATN-Shop";
// const NameTable = "Account";

const NameDataBase = "ATN-Shop";
const NameTable = "Account";

var username = "admin";
var password = "123456";

        // console.log("Name " + result[0].Product_name);
        // console.log("Discription " + result[0].Discription);
        // console.log("Price " + result[0].Price);
        // console.log("Img "  + result[0].Product_image);
        // console.log("Inventory " + result[0].Inventory);
        // console.log("Revenue " + result[0].Revenue);

var vResult = 0;
var xflag = 0;


/// ***************** ***************** *****************
async function runQuery(NameTable , vQuery) {
	
	const xdbo = await MongoClient.connect(
		uri, 
		{ useNewUrlParser: true , useUnifiedTopology: true }
    );    
	const dbo = xdbo.db(NameDataBase);
	////// Run - Query
	const results = await dbo.collection(NameTable).find(vQuery).toArray();

    ///
    //vResult = results;
    console.log(results);
    //xflag = 1;

	return results;
}
async function readDB() {
    const inf = await runQuery( NameTable , {} );
    vResult = inf;
    xflag = 1;
}

readDB();


// /// --------------------Find-------------------------
// MongoClient.connect(uri, { useUnifiedTopology: true })
// .then (client => {
//   var dbo = client.db(NameDataBase);
//   dbo.collection(NameTable).find({}).toArray()
// 	.then (result => {
//         //console.log(result);
//         console.log(result.length)
//         console.log("--------------");
//         for(var i= 0; i < result.length; i++)
//         {
//             var bodyy = result[i].User;
//         console.log(bodyy);
//         }
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



// /// --------------------Query(FindID)-------------------------
// MongoClient.connect(url, { useUnifiedTopology: true })
// .then (client => {
//   var dbo = client.db(NameDataBase);
//   var id = "5ef00bcfbbb0ff3ffb2be1b3";// se thay doi o day
//       var query = {
//       _id : ObjectId(id)
//   };

//   dbo.collection("Products").find(query).toArray()
//       .then (result => {
//           //ahha
//           client.close();
//       })
//       .catch(error => console.error(error));
// })
// .catch(error => console.error(error)); 