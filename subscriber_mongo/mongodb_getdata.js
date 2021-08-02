const { MongoClient } = require('mongodb');
//const fs = require('fs');
const { json } = require('body-parser');
const { SSL_OP_EPHEMERAL_RSA } = require('constants');
const { assert } = require('console');
const uri = "mongodb+srv://ariel:orlaharty@cluster0.piqkr.mongodb.net/ariel2?retryWrites=true&w=majority";
var i =0
var fs=require('fs')

fs.appendFile('outputmongodb1.txt',"[\n",function(err){
  if(err){
    
  }
  else{
    

  }
})

MongoClient.connect(uri, function(err, db) {
    if (err) throw err;
    var resultArray=[];
    var dbo = db.db("arieldb");
    var crusor=dbo.collection("test").find();
    crusor.forEach(function(doc,err){
        //assert.(null,err);
        resultArray.push(doc);
        var json = JSON.stringify(resultArray[i]);
        fs.appendFile('outputmongodb1.txt',json+",\n",function(err){
            if(err){
              
            }
            else{
              
        
            }
        })
        i++



        db.close()

    });
    fs.readFile('outputmongodb1.txt', function read(err, data) {
      if (err) {
          throw err;
      }
      var file_content = data.toString();
      file_content = file_content.slice(0, -1);
      console.log("rrrr"+file_content)



     
  });
   
   
    // dbo.collection("test").insertOne(myobj, function(err, res) {
    //   if (err) throw err;
    //   console.log("1 document inserted");
    //   db.close();
    // });
  });