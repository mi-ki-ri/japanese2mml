var express = require('express');

var app = express();

app.set('views', './dist');

app.set('view engine', 'ejs');

app.use(  express.static('public', {hidden: true}));

app.get('/', function(req, res){
  res.render('index');
});



/* istanbul ignore next */
if (!module.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
}
