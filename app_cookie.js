const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());

app.get('/cookie', (req, res) => {
    if(req.cookies.myCookies) {
        var myCookies = parseInt(req.cookies.myCookies);
    } else {
        var myCookies = 0;
    }
    myCookies++;
    res.cookie('myCookies', myCookies);
    res.send('count : ' + req.cookies.myCookies);
});

app.listen(3000, function () {
    console.log('Connected 3000 port !!!');
});

app.get('/id', (req, res) => {
    if(req.cookies.myID) {
        var myID = req.cookies.myID;
    } else {
        var myID = {ID : melll, PW : 1234};
    }
    res.cookie('myID', myID);
    res.send(req.cookies.myID);
});

app.listen(3003, function () {
    console.log('Connected 3003 port !!!');
});