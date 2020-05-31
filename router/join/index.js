var express = require('express');
var app = express();
var router = express.Router();
var path = require('path')
var mysql = require('mysql')

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

// DATABASE SETTING 
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'sky120',
    database: 'jsman'
})

connection.connect()

//ROUTER: 같은 url이더라도 요청방식에 따라서 다르게 처리해줄 수 있다.
router.get('/', function (req, res) {
    console.log('get join url');
    res.sendFile(path.join(__dirname, '../../public/join.html'));
})

passport.use('local-join', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqtoCallback: true
}, function (req, email, password, done) {
    console.log('local=join callback called');
}
));

// router.post('/', function (req, res) {
//     var body = req.body;
//     var email = body.email;
//     var name = body.name;
//     var passwd = body.password;
//     console.log(email);

//     var sql = { email: email, name: name, pw: passwd }

//     var query = connection.query(
//         'insert into user set ?', sql,
//         function (err, rows) {
//             if (err) { throw err; }
//             console.log("ok db insert: ", rows.insertId,  name);
//             res.render('welcome.ejs', {'name': name, 'id': rows.insertId})
//         }
//     )
// })

// 이 게 있어야 app.js에서 app.use로 쓸 수 있음
module.exports = router;
