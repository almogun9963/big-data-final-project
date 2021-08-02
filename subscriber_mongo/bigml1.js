var Event = require("./Event");
var mongo=require("./mongoDB")
const fs = require('fs')

fs.readFile('C:\\final project\\subscriber\\test.json', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
})
function bigi(event=new Event.EventObj(2,3,4,2,1,1,'17:45:1',false,4))
 {
var bigml = require('bigml');
const LocalModel = require("bigml/lib/LocalModel");
var source = new bigml.Source();

connection = new bigml.BigML('bigdata9963',
                             'f3419d14ef15689226aa92fb8037d30a30c07981',
                             )
                             

source.create('out_file.json', function(error, sourceInfo) {
  if (!error && sourceInfo) {
    var dataset = new bigml.Dataset();
    dataset.create(sourceInfo, function(error, datasetInfo) {
      if (!error && datasetInfo) {
        var model = new bigml.Model();
         model.create(datasetInfo, function (error, modelInfo) {
          if (!error && modelInfo) {

          var localModel = new bigml.LocalModel(modelInfo.resource);
          localModel.predict({"car_number": event.car_number,
                "event_kind": event.event_kind,
                 "direction": event.direction,
                  "car_kind": event.car_kind,
                 "day": event.day,
                 "time": event.time,
                 "is_special_day": event.is_special_day,
                 "first_section": event.first_section,
                 },
                 function(error, prediction) {event.setprediction(Math.round(prediction.prediction),
                  mongo.update_matrix(event))
                    console.log("prediction is" + prediction.prediction);});


          }
        });
      }
    });
  }
});
}bigi()
exports.bigi=bigi



