var express = require('express');
var router = express.Router();

//增加引用函式
const edit = require('./utility/end');
const user_insert = require('./utility/user_insert');

//接收GET請求
router.get('/', function(req, res, next) {

    relation = req.session.relation;
    constellation = req.session.constellation;
    reason = req.session.reason;
    description = req.session.description;    

    console.log(req.session);
    console.log(relation);
    console.log(constellation);
    console.log(reason);
    console.log(description);
    user_insert.query(reason, constellation, relation, description);

    edit.query().then(data => {
        if (data==null){
            res.render('error');  //導向錯誤頁面
        }else if(data==-1){
            res.render('notFound');  //導向找不到頁面                
        }else{
            res.render('end', {item:data});  //將資料傳給顯示頁面
        }  
    })
});

module.exports = router;