let bigml = require('bigml');

// connection = new bigml.BigML('bigdata9963',
//                             '01e13220eb111221f3a8f1a7ff030897011bb702');
// var source = new bigml.Source('BIGDATA9963',
//                                 '01e13220eb111221f3a8f1a7ff030897011bb702');
var source = new bigml.Source();
// source.create('C:/Users/itama/Desktop/studies/tashpa_b/Big Data and Cloud Computing/final_project/subscriber2/iris.csv', function(error, sourceInfo) {
    source.create('./iris.csv', function(error, sourceInfo) {    
    if (!error && sourceInfo) {
        var dataset = new bigml.Dataset();
        dataset.create(sourceInfo, function(error, datasetInfo) {
            if (!error && datasetInfo) {
                var model = new bigml.Model();
                model.create(datasetInfo, function (error, modelInfo) {
                    if (!error && modelInfo) {
                        var prediction = new bigml.Prediction();
                        prediction.create(modelInfo, {'petal length': 1});
                    }
                });
            }
        });
    }
});