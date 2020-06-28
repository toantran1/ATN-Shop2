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


app.get("/", function(reg,res){
    res.render("home");
});

app.get("/login",function(req,res)
{
    if ((req.query.username == "abc") && (req.query.password == "123"))
    {
        res.redirect('/')
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

app.post('/register', function (req, res) {
    var body = req.body;
    

    console.log(body);
    res.redirect('/')
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


app.set('views', path.join(__dirname, './views'));
app.listen(port, () => console.log("Example app listening at http://localhost:${port}"));
