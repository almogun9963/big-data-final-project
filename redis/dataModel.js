const MongoClient = require('mongodb').MongoClient;
//נא להחליף לחשבון שלך
const uri = "mongodb+srv://ariel:ariel123@cluster0.cwxpn.mongodb.net/salesDb?retryWrites=true&w=majority";

sumHelper = function (numbers) {
    let total = 0;
    numbers.forEach(numberObject => {
        let n = parseInt(numberObject.quantity);
        if (n)
            total += n;
    });
   
    return total;
}

var Db = {
    CreateOrder: function (name, oNumber, prod, quantity, sendMessage) {
        var newOrder =
        {
            name: name, orderNumber: oNumber, product: prod, quantity: quantity
        };
        //---------choose your db here ------------------
        MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
            if (err) throw err;
            var dbo = db.db("salesDb");
            dbo.collection("transactions").insertOne(newOrder, function (err, res) {
                if (err) throw err;
                console.log("1 order inserted");
                db.close();
            });
        });

        //---------------------------------------

        sendMessage(JSON.stringify(newOrder));
    },
    DeleteOrder: function (info) {
        console.log('Delete Order: ' + info);
    },
    UpdateOrder: function (info) {
        console.log('Update Order ' + info);
    },
    ReadOrders: function (renderTheView) {
        var sum=0;
        MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
            if (err) throw err;
            var dbo = db.db("salesDb");
            dbo.collection("transactions").find({}, { projection: { _id: 0, quantity: 1 } }).toArray(function (err, result) {
                if (err) throw err;
                console.log(result);
                sum = sumHelper(result);
                
                db.close();
                var cardData = {
                    title: "title",
                    totalSum: sum,
                    percent: 0.2,
                    icon: "face"
                }
                renderTheView(cardData);

            });
        });
       
        //כאן צריך לחשב
       

    }
};

module.exports = Db