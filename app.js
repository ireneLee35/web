var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
//------------------------------------------------------------
// 增加引用模組
//------------------------------------------------------------
var acct_add_form = require('./routes/acct_add_form');
var acct_add = require('./routes/acct_add');
var enter = require('./routes/enter');
var enter_v = require('./routes/enter_v');
var edit = require('./routes/edit');
// var edit_list = require('./routes/edit_list');
// var edit_one = require('./routes/edit_one');
var end = require('./routes/end');
var end_v = require('./routes/end_v');
var login = require('./routes/login');
var user_login = require('./routes/user_login');
var logout = require('./routes/logout');
var user_show = require('./routes/user_show');
var checkAuth = require('./routes/checkAuth');
// var writeDB = require('./routes/utility/writeDB');
//------------------------------------------------------------

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);

//--------------------------------------------------------------------
// 增加引用express-session 外掛
// maxAge是設定登入時間的生存時間，單位為毫秒
// 60000ms = 1分鐘, 600000ms = 1 minutes, 1800000ms = 30 minutes
//--------------------------------------------------------------------
var session = require('express-session');
app.use(session({secret: '請更改成一個隨機字串用來加密產生的signedCookie', cookie: { maxAge: 1800000 }}));
//--------------------------------------------------------------------

//-----------------------------------------
// 設定模組使用方式
//-----------------------------------------
app.use('/acct/add/form', acct_add_form);
app.use('/acct/add', acct_add);
app.use('/enter', enter);
app.use('/enter_v', enter_v);
app.use('/edit', edit);
// app.use('/edit/list', edit_list);
// app.use('/edit/one', edit_one);
app.use('/end', end);
app.use('/end_v', end_v);
app.use('/login', login);
app.use('/user/login', user_login);
app.use('/user/show', user_show);
app.use('/logout', checkAuth, logout);
// app.use('routes/utility/writeDB', writeDB);
//-----------------------------------------

// catch 404 and forward to error handler
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
