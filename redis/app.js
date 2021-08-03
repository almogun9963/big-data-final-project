const express = require('express')
const dataModel = require('./dataModel')
var async = require("async");

const app = express()
const port = 3000
var $ = require( "jquery" );
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use(express.static('public'))
app.set('view engine', 'ejs')

// app.get('/', (req, res) => {
//     res.sendFile('orders.html', { root: __dirname + "/public" } );
// })


var server = require('http').Server(app);
var redis = require('redis');
var redisClient = redis.createClient();



app.get('/dashboard', function (req, res) {
  
  redisClient.hmset(-1,"car_number", 1,"car_kind", 1,"section", 1,"event_kind",1);
  redisClient.hmset(-2,"car_number", 2,"car_kind", 1,"section", 2,"event_kind",1);
  redisClient.hmset(-3,"car_number", 3,"car_kind", 1,"section", 3,"event_kind",1);
  redisClient.hmset(-4,"car_number", 4,"car_kind", 1,"section", 4,"event_kind",1);
  redisClient.hmset(-5,"car_number", 5,"car_kind", 1,"section", 5,"event_kind",1);

  redisClient.keys('*', function (err, keys) {
      if (err) return console.log(err);
      if(keys){
          async.map(keys, function(key, cb) {
            redisClient.hgetall(key, function (error, value) {
                  if (error) return cb(error);
                  cb(null, value);
              }); 
          }, function (error, results) {
             if (error) return console.log(error);
              
             console.log(results);

             //from https://www.robinwieruch.de/javascript-groupby
             const groupBy = results.reduce((acc, value) => {
              // Group initialization
              if (!acc[value.section]) {
                acc[value.section] = [];
              }
             
              // Grouping
              acc[value.section].push(value);
             
              return acc;
            }, {});
           
            console.log(groupBy)
            var sec1 = Object.keys(groupBy["1"]).length-1;
            var sec2 = Object.keys(groupBy["2"]).length-1;
            var sec3 = Object.keys(groupBy["3"]).length-1;
            var sec4 = Object.keys(groupBy["4"]).length-1;
            var sec5 = Object.keys(groupBy["5"]).length-1;
            res.render("./pages/index", {section1 : sec1 , section2 : sec2 , section3 : sec3 , section4 : sec4 , section5 : sec5});
          });
      }
  });
});


app.get('/list', function (req, res) {
  
  redisClient.del('-1');
  redisClient.del('-2');
  redisClient.del('-3');
  redisClient.del('-4');
  redisClient.del('-5');

  //from https://stackoverflow.com/questions/42926990/how-to-get-all-keys-and-values-in-redis-in-javascript
  redisClient.keys('*', function (err, keys) {
      if (err) return console.log(err);
      if(keys){
          async.map(keys, function(key, cb) {
            redisClient.hgetall(key, function (error, value) {
                  if (error) return cb(error);
                  cb(null, value);
              }); 
          }, function (error, results) {
             if (error) return console.log(error);
             console.log(results);
             res.render("./pages/list", {object : results});
          });
      }
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})