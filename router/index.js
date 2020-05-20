var express = require('express');
var app = express();
var router = express.Router();
var path = require('path')
var mysql = require('mysql')
var main = require('./main/main')
var email = require('./email/email')

//url routing
router.get('/', function (req, res) {
    console.log('indexjs / path loaded')
    res.sendFile(path.join(__dirname, "../public/main.html"))
});

router.use('/main', main)
router.use('/email', email)


// router라고 위에서 적어준 것만 export해주는 것임
module.exports = router;
