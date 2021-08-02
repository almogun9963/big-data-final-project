const { MongoClient } = require('mongodb');
const fs = require('fs');
const { json } = require('body-parser');
var Enums = require("./Enums");
var stam=require("./stam")
const { SSL_OP_EPHEMERAL_RSA } = require('constants');
const uri = "mongodb+srv://ariel:orlaharty@cluster0.piqkr.mongodb.net/ariel2?retryWrites=true&w=majority";
const array = [];
MongoClient.connect(uri,  async function(err, db) {
    if (err) throw err;
    var dbo = db.db("arieldb");
///////////////////////////
const fs = require('fs');
function insert_mongo(event){
  var myobj = { car_number: event.car_number, event_kind: event.event_kind , direction: event.direction , car_kind: event.car_kind , day: event.day , time: event.time, is_special_day: event.is_special_day,first_section: event.first_section, section: event.section};
    dbo.collection("test").insertOne(myobj, async function(err, res) {
      if (err) await sleep(10000)
      
      console.log("1 document inserted");
      
    });
  }
  exports.insert_mongo=insert_mongo



function output_file(){
const MongoClient = require('mongodb').MongoClient;

const dbName = 'arieldb';
const client = new MongoClient(uri, { useUnifiedTopology:true });

client.connect(function(err) {
    //assert.equal(null, err);
    console.log('Connected successfully to server');
    const db = client.db(dbName);

    getDocuments(db, function(docs) {
    
        console.log('Closing connection.');
        client.close();
        
        // Write to file
        try {
            fs.writeFileSync('out_file.json', JSON.stringify(docs));
            console.log('Done writing to file.');
        }
        catch(err) {
            console.log('Error writing to file', err)
        }
    });
})

const getDocuments = function(db, callback) {
    const query = { };  // this is your query criteria
    db.collection("test")
      .find(query)
      .toArray(function(err, result) { 
          if (err) throw err; 
          callback(result); 
    }); 
};
}
exports.output_file=output_file





 function update_matrix(event){
    MongoClient.connect(uri, function(err, db) {
      if (err) throw err;
      var dbo = db.db("arieldb");
    // debugger;
     var index="" + event.section + "-" + event.prediction
     
      var myquery = { _id: "1" , "matrix.xy": index };
      var newvalues = { $inc : { "matrix.$.v" : 1  } };
     dbo.collection("test3").updateOne(myquery, newvalues, function(err, res) {
        if (err) throw err;
        console.log("matrix updated " + index);
        db.close();
      });
    });
  }
  exports.update_matrix=update_matrix
});
