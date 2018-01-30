

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect ('mongodb://localhost:27017', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Serer');
    }
    console.log('Connected to MongoDB Server');

 var db =  client.db('Users');
 db.collection('users').findOneAndUpdate({_id: new ObjectID('5a6fcb94f24619125a13199b')},{$set: {Age: "46 Years Old"}, $inc: {Ranking: 10} },
 {returnOriginal: false}).then((result) => {
 console.log (result);

 });

 
});