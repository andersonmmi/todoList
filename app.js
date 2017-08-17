const express = require('express');
const app = express();
const mustache = require('mustache-express');
const port = 3000;
const data = require('./data.js');
const path = require('path');
let todos = [];
let todones = [];
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
//fun wit sockets, this probably wont work :-(
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.engine('mustache', mustache());
app.set('views', './views');
app.set('view engine', 'mustache');

//I got css to serve to website by putting styles in a css subfolder
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());

app.get('/', function(req, res){
  res.render('index', {todos : todos});
});

app.post('/', function(req, res){
  todos.push(req.body.todo);
  res.redirect('/');
});

//I am attempting to get feedback from a check box click
app.post('/check', function(req, res){
  console.log("button clicked");
  // todones.push(req.body.todoCheck);
  //res.redirect('/');
});

//My search for some way to listen for clicks has led me to experiment with socket.io
io.on('connection', function(socket){
  console.log('a user connected');
});

app.listen(port, function(){
  console.log("Listening on " + port);

});
