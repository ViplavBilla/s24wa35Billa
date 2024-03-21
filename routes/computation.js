var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var x =Math.random() * 10 ;
    var y =Math.random() ;

    var value1 = Math.atan2(y,x);
    var value2 = Math.atanh(y);
    var value3 = Math.cbrt(x);
  res.send(`the random numbers are ${x} and ${y} <br> Math.atan2() applied to ${x} is ${value1} <br> Math.atanh() applied to ${y} is ${value2} <br> Math.cbrt() applied to ${x} is ${value3}`);

});

module.exports = router;