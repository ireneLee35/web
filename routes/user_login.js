var express = require('express');
var router = express.Router();

//增加引用函式
const user = require('./utility/user');

//接收POST請求
router.post('/', function(req, res, next) {
    var acct_num = req.body.acct_num;   //取得帳號
    var acct_pd = req.body.acct_pd;     //取得密碼

    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });

    user.login(acct_num, acct_pd).then(d => {
        if (d==null){
            req.session.acct_num = null;
            req.session.acct_pd = null;           
            res.render('loginFail');  //傳至登入失敗
        }else{
            req.session.acct_num = d.acct_num;
            req.session.acct_pd = d.acct_pd;
            res.render('user_show', {name:d.acct_name});   //導向使用者
        }  
    })
});

module.exports = router;