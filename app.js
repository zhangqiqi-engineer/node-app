// var express = require('express');
// var router = express.Router();

// router.get('/', function (req, res, next) {
//     var mysql = require('mysql');//导入mysql依赖包
//     var client = mysql.createConnection({
//         "host": "localhost",
//         "port": "3306",
//         "user": 'root',
//         "password": 'zq19950402!',
//         "database": 'app1',
//     });

//     var table = 't_stu';
//     client.query('select * from ' + table, function (errs, results) {
//         if (errs) {
//             throw errs;
//         }
//         if (results) {
//             console.log(results);
//         }
//     });
//     res.render('index', { title: 'Express' });
// });

// module.exports = router;


var express = require('express');
var app = express();

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'zq19950402!',
    database: 'app1',
    port: '3306',
});

connection.connect();

var table = 't_stu';
var table1 = 'information';
connection.query('select * from ' + table1, function (errs, results) {
    if (errs) throw errs;
    if (results) {
        console.log('results', results);
    }
});

connection.end();


// var express = require('express');
// var app = express();

// app.get('/', function (req, res) {
//     res.send('Hello World!');
// });

// app.listen(3000, function () {
//     console.log('Example app listening on port 3000!');
// });