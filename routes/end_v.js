var express = require('express');
var router = express.Router();

//增加引用函式
const edit = require('./utility/endv');

//接收GET請求
router.get('/', function(req, res, next) {

    edit.query().then(data => {
        if (data==null){
            res.render('error');  //導向錯誤頁面
        }else if(data==-1){
            res.render('notFound');  //導向找不到頁面                
        }else{
            res.render('end_v', {item:data});  //將資料傳給顯示頁面
        }  
    })
});

module.exports = router;