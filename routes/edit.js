var express = require('express');
var router = express.Router();

//增加引用函式
const edit = require('./utility/edit');

//接收GET請求
router.post('/', function(req, res, next) {
    var relation = req.body.relation;
    var constellation = req.body.constellation;
    var reason = req.body.reason;
    var description = req.body.description;

    req.session.relation = relation;
    req.session.constellation = constellation;
    req.session.reason = reason;
    req.session.description = description;

    edit.query().then(data => {
        if (data==null){
            res.render('error');  //導向錯誤頁面
        }else if(data==-1){
            res.render('notFound');  //導向找不到頁面                
        }else{
            res.render('edit', {item:data});  //將資料傳給顯示頁面
        }  
    })
});

module.exports = router;