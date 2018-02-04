var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TodoApp');

// module.exports = {
  //  mongoose: mongoose
  // if module and property have same name we can deconstruct with ES6

//};
module.exports = {mongoose};