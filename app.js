var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var router = require('./router/index')

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var session = require('express-session');
var flash = require('connect-flash');

app.listen(3000, function () {
    console.log("start!!!!!!!! express server on port 3000");
});

// 여기서 처리해준 것은 routing 파일에도 적용된다. 
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.set('view engine', 'ejs')

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


// routing
app.use(router)


