// Require dependencies
var mysql = require('mysql');

// Set the connection object
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'burgers_db'
});

// Call the connect function
connection.connect(function(err) {
	// If there was a connection error, log it
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  // Log connection ID on connection
  console.log('connected as id ' + connection.threadId);

});

// Export the connection object
module.exports = connection;
