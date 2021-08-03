// https://www.cloudkarafka.com/ הפעלת קפקא במסגרת ספק זה

const uuid = require("uuid");
const Kafka = require("node-rdkafka");
var EventObj = require("./Event");
var EnumObj=require("./Enums")
var mongo=require("./mongoDB");
var big_ml=require("./bigml1");
const uri = "mongodb+srv://ariel:orlaharty@cluster0.piqkr.mongodb.net/ariel2?retryWrites=true&w=majority";
const { MongoClient } = require('mongodb');

const kafkaConf = {
  "group.id": "Road Sections",
  "metadata.broker.list": "dory-01.srvs.cloudkafka.com:9094,dory-02.srvs.cloudkafka.com:9094,dory-03.srvs.cloudkafka.com:9094".split(","),
  "socket.keepalive.enable": true,
  "security.protocol": "SASL_SSL",
  "sasl.mechanisms": "SCRAM-SHA-256",
  "sasl.username": "od2wb77w",
  "sasl.password": "YQX2GtNWWgnmAm2c-9Tay70amyCnwYqT",
  "debug": "generic,broker,security"
};

const prefix = "od2wb77w-";
const topic = `${prefix}default`;
const producer = new Kafka.Producer(kafkaConf);

const genMessage = m => new Buffer.alloc(m.length,m);

const topics = [topic];
const consumer = new Kafka.KafkaConsumer(kafkaConf, {
  "auto.offset.reset": "beginning"
});

consumer.on("error", function(err) {
  console.error(err);
});
consumer.on("ready", function(arg) {
  consumer.subscribe(topics);
  consumer.consume();
});


module.exports.subscribe = consumer.on("data", function(m) {
//  console.log( m.value.toString());
 const obj = JSON.parse(m.value.toString());
 let event = new EventObj.EventObj(Number(obj.car_number), Number(obj.event_kind), Number(obj.section), Number(obj.direction), Number(obj.car_kind), Number(obj.day), obj.time, JSON.parse(obj.is_special_day), Number(obj.first_section));

 
 //checking wich event is 
 // here we need to predict where the car will exit 
  function check_which_event(event) {
     if(event.event_kind==EnumObj.event_types.ROAD_EXIT){//insert data into mongodb and update confusion matrix
      try{
          mongo.insert_mongo(event)
          mongo.output_file()
          mongo.update_matrix(event)
      }catch{
          console.log("error road exist")
      }
          
    }
  if(event.event_kind==EnumObj.event_types.ROAD_ENTER){//bigml function predict
    try{

      big_ml.bigi(event)
    }catch{
      console.log("error road enter")
    }
}

  }check_which_event(event);
consumer.on("disconnected", function(arg) {
  process.exit();
});
console.log(event.toString());
 return event;
 //  console.log(event.toString());
});
consumer.on("disconnected", function(arg) {
  process.exit();
});
consumer.on('event.error', function(err) {
  console.error(err);
  process.exit(1);
});
consumer.on('event.log', function(log) {
  // console.log(log);
});
consumer.connect();