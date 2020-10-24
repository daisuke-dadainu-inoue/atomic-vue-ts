const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const compression = require('compression');

// router
const pingRouter = require('./src/backend/route/ping/PingRouter');
const indexRouter = require('./src/backend/route/index');
const vueRouter = require('./src/backend/route/vue');

const app = express();
app.use(
  compression({
    threshold: 0,
    level: 9,
    memLevel: 9,
  })
);

// view directory path
app.set('views', path.join(__dirname, 'src/backend/view'));

// view engine
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(
  express.json({
    type: 'application/json',
  })
);
app.use(
  express.urlencoded({
    extended: false,
    type: 'application/x-www-form-urlencoded',
  })
);
app.use(cookieParser());
app.use('/api/payment/conf', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'POST');
  next();
});

// static file path
app.use(express.static(path.join(__dirname, 'public')));

// router regist
app.use('/api', indexRouter);
app.use('/ping', pingRouter);
app.use('/', vueRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
