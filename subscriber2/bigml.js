let bigml = require('bigml');

// connection = new bigml.BigML('bigdata9963',
//                             'f3419d14ef15689226aa92fb8037d30a30c07981');
// var source = new bigml.Source('BIGDATA9963',
//                                 'f3419d14ef15689226aa92fb8037d30a30c07981');
var source = new bigml.Source();
// source.create('C:/Users/itama/Desktop/studies/tashpa_b/Big Data and Cloud Computing/final_project/subscriber2/iris.csv', function(error, sourceInfo) {
    
    source.create('./BigML_Dataset_610025c9e4279b24a100b7fc.csv', function(error, sourceInfo) {    
    if (!error && sourceInfo) {
        var dataset = new bigml.Dataset();
        dataset.create(sourceInfo, function(error, datasetInfo) {
            if (!error && datasetInfo) {
                var model = new bigml.Model();
                // debugger;
                model.create(datasetInfo, function (error, modelInfo) {
                    if (!error && modelInfo) {
                        var prediction = new bigml.Prediction();
                        /*jshint -W087 */
                        debugger;
                        var localModel = new bigml.LocalModel(modelInfo.resource);
                        localModel.predict({'car_number': 1},
                       function(error, prediction) {console.log(prediction.prediction);});
                        // prediction.create(modelInfo, {'car_number': 1});
                        setTimeout(() => {
                            console.log("model " + modelInfo.resource);
                        }, 10000); 
                    }
                });
            }
        });
    }
});