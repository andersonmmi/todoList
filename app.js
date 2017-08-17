const express = require('express');
const app = express();
const mustache = require('mustache-express');
const port = 3000;
const data = require('./data.js');
const path = require('path');

app.engine('mustache', mustache());
app.set('views', './views');
app.set('view engine', 'mustache');

//cannot get css to serve to website
app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res){
  res.render('index');
});

app.listen(port, function(){
  console.log("Listening on " + port);
  console.log(app.set);
  console.log(app.use);
});
