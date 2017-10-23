var express = require('express');
var router = express.Router();
var URL = require('url');
var User = require('./user')
var connection = require('./mysql')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/getUserInfo', function(req, res, next) {

  var user = new User();
  var params = URL.parse(req.url, true).query;
  console.log(params)
  if(params.id == '1') {

    user.name = "ligh";
    user.age = "1";
    user.city = "北京市";

  }else{
    user.name = "SPTING";
    user.age = "1";
    user.city = "杭州市";
  }
  connection.query('SELECT *from userInfo', function(error, results, fields) {
    // console.log(error)
    // console.log(results)
    res.send(JSON.stringify(results));
    // console.log(fields)
    // if (err) throw err;
  });
  connection.end();

  var response = {status:1,data:user};
  // res.send(JSON.stringify(response));

});

module.exports = router;
