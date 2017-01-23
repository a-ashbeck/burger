// Require dependencies
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

// Server setup variables
var app = express();
var port = process.env.PORT || 3000;

// Set app to listen to the port defined above
app.listen(port);

// Define handlesbars engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
// Set handlebars engine
app.set('view engine', 'handlebars');

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// Require the routes set in burger_controller.js
require('./controllers/burgers_controller.js')(app);
