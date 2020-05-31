var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');

// main page에는 login이 될 때만 (세션 정보가 있을 때만) 접근이 가능하게 하자.
router.get('/', function (req, res) {
    var id = req.user;
    if (!id) {
        res.render('login.ejs')
    }
    res.render('main.ejs', {'id' : id});

});


//다른 파일에서도 쓸 수 있게 해 줌.
module.exports = router;