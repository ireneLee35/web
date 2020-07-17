var express = require('express');
var router = express.Router();

/* POST home page. */
router.post('/', function(req, res, next) {

  var relation = req.params.relation;
  var constellation = req.params.constellation;
  var reason = req.params.reason;
  var description = req.params.description;

  //將session中資料取出
  req.params.relation = relation;
  req.params.constellation = constellation;
  req.params.reason = reason;
  req.params.description = description;

  console.log(relation);
  console.log(constellation);
  console.log(reason);
  console.log(description);

  //執行某些資料庫動作
  res.render('end');
  
});

module.exports = router;