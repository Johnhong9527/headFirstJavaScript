var mysql = require('mysql')
// mysql
var connection = mysql.createConnection({
  host: 'bdm257820282.my3w.com',
  user: 'bdm257820282',
  password: '8e5fH55fPsB24',
  database: 'bdm257820282_db',
  port: 3306
});
connection.connect();
// connection.query('SELECT *from userInfo', function(error, results, fields) {
//   // console.log(error)
//   console.log(results)
//   // console.log(fields)
//   // if (err) throw err;
// });
// connection.end();
module.exports = connection;
