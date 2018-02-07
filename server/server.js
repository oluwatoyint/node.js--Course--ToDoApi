var express = require('express');
var bodyParser = require('body-parser');


var {mongoose} = require('./db/mongoose');
var {todo} = require('./models/todo');
var {user} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {

      var mytodo = new todo ({
          text: req.body.text
      });
        
  mytodo.save().then((doc) => {
      res.send(doc);
  }, (e) => {
      res.status(400).send(e);

  });

});
app.get('/todos', (req, res) => { 
    todo.find().then((todos) => {
        console.log('hello')
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    })    

});
app.listen(3000, () => {
    console.log('Started on port 3000');
});
module.exports = {app};