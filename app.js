var express = require('express');
// var bodyParser = require('body-parser');

var app = express();
var loginController = require('./controller/loginController');
app.set('view engine','ejs');
app.use(express.static('./public'));
loginController(app);
app.listen(3500);



console.log('kulwant singh sandhu');