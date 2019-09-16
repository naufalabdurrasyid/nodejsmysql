var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "naufalrasyid",
  password: "******",
  database: "MANTUL"
});

con.connect(function (err){
    if(err) throw err;
});

module.exports = con;
