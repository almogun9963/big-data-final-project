// https://www.cloudkarafka.com/ הפעלת קפקא במסגרת ספק זה



var express = require('express');
var app = require('express')();
var server = require('http').Server(app);
var redis = require('redis');
var redisClient = redis.createClient();
var sub = redis.createClient()







const uuid = require("uuid");
const Kafka = require("node-rdkafka");
var EventObj = require("./Event");
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
//const prefix = process.env.CLOUDKARAFKA_USERNAME;

const topics = [topic];
const consumer = new Kafka.KafkaConsumer(kafkaConf, {
  "auto.offset.reset": "beginning"
});

consumer.on("error", function(err) {
  console.error(err);
});
consumer.on("ready", function(arg) {
  // console.log(`Consumer ${arg.name} ready`);
  consumer.subscribe(topics);
  consumer.consume();
});


module.exports.subscribe = consumer.on("data", function(m) {

//  console.log( m.value.toString());
  const obj = JSON.parse(m.value.toString());
  let event = new EventObj.EventObj(Number(obj.car_number), Number(obj.event_kind), Number(obj.section), Number(obj.direction), Number(obj.car_kind), Number(obj.day), obj.time, JSON.parse(obj.is_special_day), Number(obj.first_section));
  console.log(event.toString());

  if(obj.event_kind==3){
    redisClient.hmset(Number(obj.car_number),"car_number", Number(obj.car_number),"car_kind", Number(obj.car_kind),"section", 0,"event_kind",Number(obj.event_kind),"day",Number(obj.day),"time",obj.time);
  }else{
    redisClient.hmset(Number(obj.car_number),"car_number", Number(obj.car_number),"car_kind", Number(obj.car_kind),"section", Number(obj.section),"event_kind",Number(obj.event_kind),"day",Number(obj.day),"time",obj.time);
  }
  //redisClient.hmset(Number(obj.car_number),"car_number", Number(obj.car_number),"car_kind", Number(obj.car_kind),"section", Number(obj.section),"event_kind",Number(obj.event_kind),"day",Number(obj.day),"time",obj.time);

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