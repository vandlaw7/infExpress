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
    var msg;
    var errMsg = req.flash('error')
    if (errMsg) msg = errMsg;
    res.render('join.ejs', {'message' : msg});
})

passport.serializeUser(function(user,done) {
    console.log('passport session save : ', user.id);
    done(null, user.id);
})

passport.deserializeUser(function(id,done) {
    console.log('passport session get id : ', id);
    // user라는 객체에 담아서 전달함.
    done(null, id);
})


passport.use('local-join', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, function (req, email, password, done) {
    var query = connection.query('select * from user where email=?', [email], function(err, rows){
        if (err) return done(err);

        if (rows.length) {
            console.log('existed user')
            // 이미 있어서 오류를 띄우는 것. faile할 때 저 message를 가져가게 됨.
            return done(null ,false, {message : "your email is already used"})
        } else {
            var sql = {email: email, pw:password, name: 'default'};
            var query = connection.query('insert into user set ?', sql, function(err, rows){
                if(err) throw err;
                return done(null, {'email' : email, 'id' : rows.insertId});
            })
        }
    }    
)
}));


//실제 처리는 위의 LocalStrategy에서 구현이 됨. 처리 후에 어떻게 할 지를 이 뒤에서 해주는 것임.
router.post('/', passport.authenticate('local-join', {
    successRedirect: '/main',
    failureRedirect: '/join',
    failureFlash: true 
}))



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
