var express = require('express');
var app = express();
var router = express.Router();
var path = require('path')
var mysql = require('mysql')
var main = require('./main/main')
var email = require('./email/email')
var join = require('./join/index')
var login = require('./login/index')

//url routing
router.get('/', function (req, res) {
    console.log('get join url')
    res.render('join.ejs');
});

router.use('/main', main)
router.use('/email', email)
router.use('/join', join)
router.use('/login', login)

// router라고 위에서 적어준 것만 export해주는 것임
module.exports = router;
