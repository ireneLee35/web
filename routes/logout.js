var express = require('express');
var router = express.Router();

//增加引用函式
const user = require('./utility/user');

//接收POST請求
router.get('/', function(req, res, next) {
    req.session.acct_num = null;
    req.session.acct_pd = null;  
    res.render('index');  
});

module.exports = router;