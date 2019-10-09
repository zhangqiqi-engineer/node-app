
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


app.get('/', function (req, res) {
    res.sendfile(__dirname + "/" + "index.html");
});


//实现登录验证功能
app.get('/login', function (req, res) {
    var name = req.query.name;
    var pwd = req.query.pwd;

    var selectSQL = "select * from information where useName = '" + name + "' and password = '" + pwd + "'";
    connection.query(selectSQL, function (err, rs) {
        if (err) throw err;
        console.log(rs);
        console.log('OK');
        res.sendfile(__dirname + "/" + "OK.html");
    })
})

app.get('/register.html', function (req, res) {
    res.sendfile(__dirname + "/" + "register.html");
});


//实现注册功能
app.get('/register', function (req, res) {
    var name = req.query.name;
    var pwd = req.query.pwd;
    var user = { useName: name, password: pwd };
    connection.query('insert into information set ?', user, function (err, rs) {
        if (err) throw err;
        console.log('ok');
        res.sendfile(__dirname + "/" + "index.html");
    })
})

// var table = 't_stu';
// var table1 = 'information';
// connection.query('select * from ' + table1, function (errs, results) {
//     if (errs) throw errs;
//     if (results) {
//         console.log('results', results);
//     }
// });



var server = app.listen(7744, function () {
    console.log("start");
})

// connection.end();
