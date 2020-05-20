var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var main = require('./router/main')
var email = require('./router/email')


app.listen(3000, function () {
    console.log("start!!!!!!!! express server on port 3000");
});

// 여기서 처리해준 것은 routing 파일에도 적용된다. 
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.set('view engine', 'ejs')


// routing
app.use('/main', main)
app.use('/email', email)

app.get('/', function (req, res) {
    console.log('test!')
    res.sendFile(__dirname + "/public/main.html")
});

