var express = require('express');
var router = express.Router();

//增加引用函式
const acct = require('./utility/acct');

//接收POST請求
router.post('/', function(req, res, next) {
    var acct_num = req.body.acct_num;              //取得帳號
    var acct_pd = req.body.acct_pd;                //取得密碼
    var acct_name = req.body.acct_name;            //取得名稱

    // 建立一個新資料物件
    var newData={
        acct_num:acct_num,
        acct_pd:acct_pd,
        acct_name:acct_name
    } 
    
    acct.add(newData).then(d => {
        if (d==0){
            res.render('addSuccess');  //傳至成功頁面
        }else{
            res.render('addFail');     //導向錯誤頁面
        }  
    })
});

module.exports = router;