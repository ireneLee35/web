'use strict';

//引用操作資料庫的物件
const sql = require('./asyncDB');

//------------------------------------------
//執行資料庫動作的函式-存入進資料庫
//------------------------------------------
var query = async function( reason, constellation, relation, description ){
    var result={};
    console.log('here');
    await sql('INSERT INTO record (intimacy, reason, constellation, relation, description, rectime, catno) VALUES ($1, $2, $3, $4, $5, Now(), $6)', ["t", reason, constellation, relation, description, "1"])
        .then((data) => {
            console.log(data);
            if(data.rows.length > 0){
                result = data.rows[0];   
            }else{
                result = -1;
            }    
        }, (error) => {
            result = error;
        });
		
    return result;
}

//匯出
module.exports = {query};