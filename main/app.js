var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index'); // router객체를 반환
var usersRouter = require('./routes/users'); // router객체를 반환
var roomsRouter = require('./routes/roomdata'); // router객체를 반환
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




app.use('/', indexRouter); //        /로 오는 모든 요청은 indexRouter 객체에 인가
app.use('/users', usersRouter);//    /users로 오는 모든 요청은 usersRouter 객체에 인가
app.use('/rooms',roomsRouter); //    /rooms로 오는 모든 요청은 roomsRouter 객체에 인가




// catch 404 and forward to error handler -> 예는 라우팅에 대한 에러 처리인데, 모든 라우팅 처리 맨 마지막에 와야함 ㅇㅇ
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
