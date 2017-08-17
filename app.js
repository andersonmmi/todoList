const express = require('express');
const app = express();
const mustache = require('mustache-express');
const port = 3000;
const data = require('./data.js');
const path = require('path');
let todos = ["Wash the car"]

app.engine('mustache', mustache());
app.set('views', './views');
app.set('view engine', 'mustache');

//I got css to serve to website by putting styles in a css subfolder
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('index', {todos : todos});
});

app.listen(port, function(){
  console.log("Listening on " + port);
  console.log(app.set);
  console.log(app.use);
});
