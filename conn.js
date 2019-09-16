var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "naufalrasyid",
  password: "123_Naufal",
  database: "MANTUL"
});

con.connect(function (err){
    if(err) throw err;
});

module.exports = con;