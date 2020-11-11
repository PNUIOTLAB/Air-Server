var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var axios = require('axios');
var cors = require('cors'); // 이거 김근영이 추가함 웹브라우저에서 데이터 axios로 받아올려면 필요한 모듈

var indexRouter = require('./routes/index'); // router객체를 반환
var usersRouter = require('./routes/users');
var deviceRouter = require('./routes/device_desired');
var roomRouter = require('./routes/room');

var app = express();

app.use(cors({
  origin: true,
  credentials: true   //// 이거 김근영이 추가함 웹브라우저에서 데이터 axios로 받아올려면 필요한 모듈
}));

axios.post('http://localhost:5000/index',function(req,res,next){ //받은 수동제어신호를 Pi에 POST 방식으로 전송
    console.log(req.body);
    console.log(req);
}
);


