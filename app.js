const express = require('express');
const app = express();
const mustache = require('mustache-express');
const port = 3000;
const data = require('./data.js');

app.engine('mustache', mustache());
app.set('vews', './views');
app.set('view engine', 'mustache');

app.use(express.static(__dirname+'/public'));

app.get('/index', function(req, res){
  res.render('index',data);
});

app.listen(port, function(){
  console.log("Listening on " + port);
  console.log(app.set);
  console.log(app.use);
});
