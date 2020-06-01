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

router.get('/list', function (req, res) {
    res.render('movie.ejs')
})

// 1. /movie, GET
router.get('/', function (req, res) {
    var responseData = {};

    var query = connection.query(
        'select title from movie', function (err, rows) {
            if (err) throw err;
            if (rows.length) {
                console.log(rows)
                responseData.result = 1;
                responseData.data = rows;
            } else {
                responseData.result = 0;
            }
            res.json(responseData)
        })

})

// 2. /movie, POST
router.post('/', function (req, res) {
    var title = req.body.title;
    var type = req.body.type;
    var grade = req.body.grade;
    var actor = req.body.actor;

    // ES 6 적용한 것
    var sql = {title, type, grade, actor};
    var query = connection.query(
        'insert into movie set ?', sql,
        function (err, rows) {
            if (err) { throw err; }
            return res.json({'result' : 1});
        }
    )
})

// 3. /movie/title, GET
router.get('/:title', function (req, res) {
    var title = req.params.title;
    console.log("title =>", title);

    var responseData = {};

    var query = connection.query(
        'select * from movie where title =?', [title], function (err, rows) {
            if (err) throw err;
            if (rows[0]) {
                console.log(rows)
                responseData.result = 1;
                responseData.data = rows;
            } else {
                responseData.result = 0;
            }
            res.json(responseData)
        })

})



// //ROUTER
// router.post('/form', function (req, res) {
//     console.log(req.body.email)
//     res.render('email.ejs', { 'email': req.body.email })
// })

// router.post('/ajax', function (req, res) {
//     var email = req.body.email;
//     var responseData = {};

//     var query = connection.query(
//         'select name from user where email="' + email + '"', function (err, rows) {
//             if (err) throw err;
//             if (rows[0]) {
//                 console.log(rows[0].name);
//                 responseData.result = "ok";
//                 responseData.name = rows[0].name;
//             } else {
//                 responseData.result = "none";
//                 responseData.name="";
//             }
//             res.json(responseData) //function 안에서 동작해야 함. 
//                                     // 기본이 비동기라 밖에 있으면 동작 안 함.
//         })
// })


// 이 게 있어야 app.js에서 app.use로 쓸 수 있음
module.exports = router;
