// const MongoClient = require ('mongodb').MongoClient;


const {MongoClient, ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(obj);

MongoClient.connect ('mongodb://localhost:27017', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Serer');
    }
    console.log('Connected to MongoDB Server');
    
    // var db = client.db('ToDoApp');
    // db.collection('Todos').insertOne({
    //     text: 'This is ',
    //     completed: 'Good'

    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });


    // var db = client.db('Users');
    // db.collection('Users').insertOne({
    //     name: 'Oluwatoyin Tejuoso',
    //     sex: 'male',
    //     location: 'Gani Fawehinmi Library Alausa'
    // }, (err, result) =>{
    //         if (err) {
    //             return console.log('Unable to insert the new user', err);
    //         }
    //       //  console.log(JSON.stringify(result.ops, undefined,2));
    //     //   console.log(result.ops[0]._id);
    //     console.log(result.ops[0]._id.getTimestamp());
    // });


    // client.close()
})

