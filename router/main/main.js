var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');

// /main으로 들어오는 걸 여기로 다시 연결시켰기 때문에 '/'가 돼야 함.
router.get('/', function (req, res) {
    console.log('main js loaded', req.user)
    var id = req.user;
    res.render('main.ejs', {'id' : id});

});


//다른 파일에서도 쓸 수 있게 해 줌.
module.exports = router;