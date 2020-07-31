var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var chatRouter = require('./routes/chat');
var contactRouter = require('./routes/contacts');
var signupRouter = require('./routes/signup');
var loginRouter = require('./routes/login');
var smsRouter = require('./routes/sms');
var slideRouter = require('./routes/slide');
var aboutusRouter = require('./routes/aboutus');
// var chatsendRouter = require('./routes/chatsend');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/chat', chatRouter);
app.use('/contacts', contactRouter);
app.use('/signup', signupRouter);
app.use('/login', loginRouter);
app.use('/sms', smsRouter);
app.use('/slide', slideRouter);
app.use('/aboutus', aboutusRouter)
// app.use('/chatsend', chatsendRouter);


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
