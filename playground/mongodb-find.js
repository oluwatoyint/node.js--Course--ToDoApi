

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect ('mongodb://localhost:27017', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Serer');
    }
    console.log('Connected to MongoDB Server');

    // var db = client.db('ToDoApp');
    // db.collection('Todos').find({completed: 'Bad'}).toArray().then((docs) => {
    //     console.log('Todos');
    //     if(docs.length <= 0){
    //         console.log('no todos found');
    //     }
    //     else{
    //         console.log(JSON.stringify(docs, undefined, 2));
    //     }
        
    // var db = client.db('ToDoApp');
    // db.collection('Todos').find({_id: ObjectID('5a6891c2dc47d333d494a7e9')}).toArray().then((docs) => {
    //     console.log('Todos');
    //     if(docs.length <= 0){
    //         console.log('no todos found');
    //     }
    //     else{
    //         console.log(JSON.stringify(docs, undefined, 2));
    //     }
        
        
    // var db = client.db('ToDoApp');
    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count : ${count}`);
        
    //     }, (err) => {
    //         console.log('Unable to fecth records');
    //     });
    
        
    var db = client.db('Users');

    db.collection('Users').find({name: 'Ayomide Tejuoso'}).toArray().then((docs) => {
        
        if(docs.length <= 0){
                    console.log('no users found');
                 }
                 else{
                    console.log(JSON.stringify(docs, undefined, 2));
        }
    });

    });
