const express = require('express');
const app = express();
const mustache = require('mustache-express');
const port = 3000;
const data = require('./data.js');
const path = require('path');
let todos = []
const bodyParser = require('body-parser');

app.engine('mustache', mustache());
app.set('views', './views');
app.set('view engine', 'mustache');

//I got css to serve to website by putting styles in a css subfolder
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res){
  res.render('index', {todos : todos});
});

app.post('/', function(req, res){
  todos.push(req.body.todo);
  res.redirect('/');
});

app.listen(port, function(){
  console.log("Listening on " + port);
  console.log(app.set);
  console.log(app.use);
});
