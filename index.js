const express = require('express');
const app = express();
const port = 8001;
var url = require('url');						
var path = require('path');


var bodyParser = require('body-parser');

// parse application/json 
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencode

app.set('view engine', 'ejs');  
app.use(express.static("public"));

var xflag = 0;
var vResult = [];

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
    if ((req.query.username == "abc") && (req.query.password == "123"))
    {
        res.redirect('/');
    }
    else
    {
        res.render("login");
    } 
});

app.get("/product", function(req,res)
{
    res.render("product");
});




app.get("/account", function(req,res)
{
    res.render("account");
});


app.get("/sales", function(req,res)
{
    res.render("sales");
});

app.get("/register",function(req,res)
{
    res.render("register");
});

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
    //console.log(body.User);
    //console.log(body.Password);

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
            //console.log(result);
            // console.log(result.length)
            // console.log("--------------");
            // for(var i= 0; i < result.length; i++)
            // {

            // console.log(result[i].User);
            // console.log(result[i].Password);
            // }

            if(result.length == 1)
            {
                console.log("ban da dang nhap thanh cong");
            }
            client.close();
        })
        .catch(error => console.error(error));
    })
    .catch(error => console.error(error));

    res.redirect('/');
});

app.set('views', path.join(__dirname, './views'));
app.listen(port, () => console.log("Example app listening at http://localhost:${port}"));



