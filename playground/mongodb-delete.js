

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect ('mongodb://localhost:27017', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB Serer');
    }
    console.log('Connected to MongoDB Server');

// delete Many

// var db = client.db('ToDoApp')
// db.collection('Todos').deleteMany({text: "Eat Lunch"}).then((result, err) => {
//     console.log(result);
// });
var db = client.db('ToDoApp');

// Delete Many

// db.collection('Todos').deleteMany({text: "Eat Fufu"}).then((result) => {

// if (result.result.n == 0) {
//     console.log("No Document with search parameter available");     
//  // console.log(result);
// }else {
  
//     console.log (`There where ${result.result.n} Documents with text "Eat Lunch" deleted`);
//     console.log (result.result.n);
//  }

// delete One

// db.collection('Todos').count({text: "Eat Lunch"}, function(err, count)  {
//     if (err) {
//         console.log("No Record Found");
//     }else {
    
//     console.log(`There were ${count} records found` );
// }
// });

//Promise method with delete One
// db.collection('Todos').deleteOne({text: "Eat Lunch"}).then((result) => {

//     if (result.result.n == 0) {
//        console.log("No Document with search parameter available");     
//          // console.log(result);
//     }else {
     
     
//      console.log(result.result.n);
//      console.log("A record deleted");
//      }
   
//     });

// Callback method with delete One
    // console.log(count);
    // db.collection('Todos').deleteOne({text: "Eat Lunch"}, function(err, result) {

    //     if (err) {
    //        console.log("No Document with search parameter available");     
    //          // console.log(result);
    //     }else {
                  
    //     // console.log(`A record deleted out of ${count}`);
    //      }
       
    //     });
//  find one and delete
db.collection('Todos').findOneAndDelete({completed: false}).then((results) => {
 console.log (results);

});

});