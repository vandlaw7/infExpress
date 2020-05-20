var express = require('express');
var app = express();
var router = express.Router();
var path = require('path')
var mysql = require('mysql')

// DATABASE SETTING 
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'sky120',
    database: 'jsman'
})

connection.connect()

//ROUTER
router.get('/', function (req, res) {
    console.log('get join url');
    res.sendFile(path.join(__dirname, '../../public/join.html'));
})




// 이 게 있어야 app.js에서 app.use로 쓸 수 있음
module.exports = router;
