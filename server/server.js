var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp');
mongoose.connect('mongodb://localhost:27017/Users');

// var Todo = mongoose.model('Todo', {
//     text: {
//         type: String
//     },
//     completed:{
//         type: Boolean
//     },
//     completedAt: {
//         type: Number
//     }
// });

// Creating a Model using Validators
var user = mongoose.model('user', {
    emailaddress: {
        type: String,
        required: true,
        minlength:1,
        trim: true
    },
    completed:{
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});
// var newTodo = new Todo ({
//     text: 'Cook Dinner'

// });

// newTodo.save().then((doc) => {

//     console.log('Saved todo', doc);
// }, (e) => {
//     console.log('Unable to Save todo');

// })

// var myTodo = new Todo ({
//     text: "I love Node.js",
//     completed: false,
//     completedAt: 2
// })

// myTodo.save().then((doc) => {

//     console.log('Saved todo', doc);
// }, (e) => {
    
//     console.log('Unable to Save todo');

// })

// Validation Lesson 1
var myvalidator = new user ({

    emailaddress: "    wificombatacademy@gmail.com  ",

    
})
myvalidator.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
}, (err) => {
    console.log ('Unable to Save User');

})