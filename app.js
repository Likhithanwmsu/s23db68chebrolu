var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
{useNewUrlParser: true,
useUnifiedTopology: true});

var indexRouter = require("./routes/index");
var usersRouter = require('./routes/users');
var hotelsRouter = require('./routes/hotels');
var boardRouter = require('./routes/board');
var selectorRouter = require('./routes/selector');
var hotelsRouter = require('./models/hotels');
var resourceRouter = require('./routes/resource');

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});


var app = express();
// We can seed the collection if needed onserver start
async function recreateDB(){
 // Delete everything
 await hotelsRouter.deleteMany();
 let instance1 = new hotelsRouter({hotels_location:"Maryville", hotels_numrooms:50,hotels_rating:10});
 let instance2 = new hotelsRouter({hotels_location:"Omaha",hotels_numrooms:40,hotels_rating:9});
 let instance3 = new hotelsRouter({hotels_location:"Chicago", hotels_numrooms:45,hotels_rating:8});
 instance1.save().then(() => {

    console.log("Object 1 created")
  
  }).catch((err) => {
  
    console.log(err);
  
  })
  instance2.save().then(() => {

      console.log("Object 2 created")
    
    }).catch((err) => {
    
      console.log(err);
    
    })
    instance3.save().then(() => {

        console.log("Object 3 created")
      
      }).catch((err) => {
      
        console.log(err);
      
      }) 
}
let reseed = true;
if (reseed) { recreateDB();}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/hotels', hotelsRouter);
app.use('/board', boardRouter);
app.use('/selector', selectorRouter);
app.use('/resource', resourceRouter);

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
