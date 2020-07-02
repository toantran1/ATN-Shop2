const express = require('express');
const app = express();
const port = 8001;
var url = require('url');						
var path = require('path');
ObjectId = require('mongodb').ObjectID;


var bodyParser = require('body-parser');

// parse application/json 
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));


/// *****************  Models
const Product = require('./models/product-data');
const Account = require('./models/account-data');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencode

app.set('view engine', 'ejs');  
app.use(express.static("public"));

var xflag = 0;
var vResult = [];
var blockPayment = 0;

/// ***************** ***************** *****************
/// ***************** ***************** Config DB CONNECTION
const MongoClient = require('mongodb').MongoClient;
const mongosee = require('mongoose');


const uri = "mongodb+srv://AdminATN:123456ATN@cluster0-bqt2b.mongodb.net/ATN-Shop?retryWrites=true&w=majority";


/// ***************** ***************** *****************
/// ***************** Database & Bảng dữ liệu cần Truy vấn
const NameDataBase = "ATN-Shop";
const NameTable = "Account";


/// ***************** ***************** *****************
/// ***************** GET
app.get("/", function(reg,res){
    res.render("home");
});

app.get("/login",function(req,res)
{
    res.render("login");
});

app.get("/product", function(req,res)
{
    blockPayment = 0 ;
    arrBill = [];
    responseDB(res, "product",
				Product, {}, {}, "productlist");
    //res.render("product");
});

app.get("/account", function(req,res)
{
    responseDB(res, "account",
    Account, {}, {}, "accountlist");

    
    
    //res.render("account");
});


app.get("/sales", function(req,res)
{
    res.render("sales");
});

app.get("/register",function(req,res)
{
    res.render("register");
});

/// /payment
/// ***************** ***************** *****************
app.get('/payment', viewPayment);
function viewPayment(request, response) {
    //response.send("Web - PAYMENT page !" + request.query.dssp);
    var dssp = request.query.dssp;
    var listkq = dssp.split("_");

    listsp = [];
    var count = listkq.length/2; 

    if (listkq.length % 2 != 0 )
    count = ((listkq.length - 1) /2);

    for (i=0; i< count; i++) {
        listsp.push(
            { Name :listkq[i*2], Price : 30000, Num: listkq[i*2+1]},
        );

    }

    if(blockPayment == 0)
    {
        for (j=0; j< count; j++){
            query = {
                _id: ObjectId(listsp[j].Name)
            };
    
            runQuery("Products",query);
        }
        blockPayment = 1;
    }
    else
    {
        if (blockPayment == 1)
        {
            for(var i = 0; i< count; i++)
            {
                arrBill[i].Price *= listkq[i*2+1];
                arrBill[i].Num = listkq[i*2+1];
            }
            blockPayment = 2;
        }

    }

    response.render("payment", {productlist : arrBill });
           
}

app.get('/load', chuyentiep);
function chuyentiep(req,res)
{
    var Url = req.query.url;
    console.log("da cho 5 giay");
    var load =[];
    load.push(
       {url: Url}
    );
    res.render("waitloadpage",{aa :load});
}



/// ***************** ***************** *****************
/// ***************** POST
app.post('/register', function (req, res) {
    var body = req.body;
    
        /// --------------------Insert-------------------------
    MongoClient.connect(uri, { useUnifiedTopology: true })
    .then (client => {
    var dbo = client.db(NameDataBase);
    
    dbo.collection(NameTable).insertOne(body)
        .then (result => {
            console.log(result);
            client.close();
        })
        .catch(error => console.error(error));
    })
    .catch(error => console.error(error));


    console.log(body);

    res.redirect('/');
    
});

app.post('/login', function(req, res){
    var body = req.body;

    /// --------------------Query-------------------------
    MongoClient.connect(uri, { useUnifiedTopology: true })
    .then (client => {
    var dbo = client.db(NameDataBase);
        var query = {
            User: body.User,
            Password: body.Password
    };

    dbo.collection(NameTable).find(query).toArray()
        .then (result => {
            console.log(result.length);
            if(result.length == 1)
            {
               
                console.log("ban da dang nhap thanh cong");
                res.redirect('/');
            }
            else
            {
                console.log("ban da dang nhap that bai");
                res.redirect('/login');
            }
            client.close();
        })
        .catch(error => console.error(error));
    })
    .catch(error => console.error(error));

    
});


/// ***************** 
async function responseDB(response, xview, xModel, xQuery, xparams, xtag, xNext="error") {

    const xdb = await mongosee.connect(
        uri, 
        { useNewUrlParser: true , useUnifiedTopology: true }
    );
    
    if (xdb) 
    {
        //xQuery = { Password : "" , _id : ""};
        const kq = await xModel.find(xQuery).exec();

        if (kq) {
            xparams[xtag] = kq;            
            console.log(xview + "\t THanh cong !");
            response.render(xview, xparams);
        } else {
            response.render(xNext, { mesg : "... KO co Data DB ! "} );
        }
    } else {
        response.send("ko thanh cong !");
        //response.redirect('/login');
    }

}

var xflag = 0;
var vResult = [];
var arrBill = [];

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
    arrBill.push(
        {
            _id : results[0]._id,
            Name : results[0].Product_name,
            Price : results[0].Price,
            Num : 1,
            Img : results[0].Product_image,
        }
    );
    //arrBill.push(results);
    console.log(arrBill);
    //xflag = 1;

	return results;
}

/// *****************
async function readDB(dataTable, query) {
    
    const inf = await runQuery( dataTable , query );
    vResult = inf;
    //xflag = 1;
}

app.set('views', path.join(__dirname, './views'));
app.listen(process.env.PORT || port, () => console.log("Example app listening at http://localhost:${port}"));



