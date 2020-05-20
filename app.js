var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var mysql = require('mysql');
var main = require('./router/main')

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'sky120',
    database: 'jsman'
})

connection.connect()

app.listen(3000, function () {
    console.log("start!!!!!!!! express server on port 3000");
});


app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.set('view engine', 'ejs')

app.use('/main', main)

app.get('/', function (req, res) {
    console.log('test!')
    res.sendFile(__dirname + "/public/main.html")
});



app.post('/email_post', function (req, res) {
    console.log(req.body)
    console.log(req.body.email)
    // res.send("<h1>welcome !" + req.body.email + "</h1>")
    res.render('email.ejs', { 'email': req.body.email })
})

app.post('/ajax_send_email', function (req, res) {
    var email = req.body.email;
    var responseData = {};

    var query = connection.query(
        'select name from user where email="' + email + '"', function (err, rows) {
            if (err) throw err;
            if (rows[0]) {
                console.log(rows[0].name);
                responseData.result = "ok";
                responseData.name = rows[0].name;
            } else {
                responseData.result = "none";
                responseData.name="";
            }
            res.json(responseData) //function 안에서 동작해야 함. 
                                    // 기본이 비동기라 밖에 있으면 동작 안 함.
        })
    
})
