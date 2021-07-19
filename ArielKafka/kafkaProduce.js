// https://www.cloudkarafka.com/ הפעלת קפקא במסגרת ספק זה

const uuid = require("uuid");
const Kafka = require("node-rdkafka");

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

producer.on("ready", function(arg) {
  console.log(`producer Ariel is ready.`);
});
// producer.connect();

module.exports.publish= function(msg)
{   
  // m=JSON.stringify(msg);
  // setTimeout(() => { producer.produce(topic, -1, genMessage(msg), uuid.v4()); }, 1000);
  producer.produce(topic, -1, genMessage(msg), uuid.v4());  
  //producer.disconnect();   
};
producer.connect();

// setTimeout(() => { producer.produce(topic, -1, genMessage("kbkjkk "), uuid.v4()); }, 2000);