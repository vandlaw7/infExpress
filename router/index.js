var express = require('express');
var app = express();
var router = express.Router();
var path = require('path')
var mysql = require('mysql')
var main = require('./main/main')
var email = require('./email/email')
var join = require('./join/index')
var login = require('./login/index')
var logout = require('./logout/index')
var movie = require('./movie/index')


//url routing
router.use('/', main);

router.use('/main', main)
router.use('/email', email)
router.use('/join', join)
router.use('/login', login)
router.use('/logout', logout)
router.use('/movie', movie)

// router라고 위에서 적어준 것만 export해주는 것임
module.exports = router;
