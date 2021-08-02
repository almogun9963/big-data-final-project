function get_list(){
let lst = [];
var MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://ariel:orlaharty@cluster0.piqkr.mongodb.net/ariel2?retryWrites=true&w=majority";
MongoClient.connect(uri,  async function(err, db) {
    if (err) throw err;
    
    var dbo = db.db("arieldb");
    
    dbo.collection("test3").findOne({_id : "1"}, {_id : 0 , "matrix.xy" : 1}, function(err, result) {
        for(var i = 0; i< 25; i++){
            lst.push(result.matrix[i].v);
        }
      db.close();
      
    });
    
  });
  console.log("return list: " +lst);
  setTimeout(() => {return lst}, 200);
}exports.get_list=get_list
  