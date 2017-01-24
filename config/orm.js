// Require dependencies
var connection = require('./connection.js');

// ORM object with SQL interaction functions
var orm = {
    // Selects all data from a given table
    selectAll: function(tableInput, cb) {
        var queryString = 'SELECT * FROM ' + tableInput + ';';
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    // Inserts a new row of data into a given table
    insertOne: function(table, cols, vals, cb) {
        // Variable to hold SQL query string
        var queryString = 'INSERT INTO ' + table;

        // Assemble query string
        queryString += ' (';
        queryString += cols.toString();
        queryString += ') ';
        queryString += 'VALUES (';
        queryString += '?';
        queryString += ') ';

        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },

    // Updates data for an entry in a given table
    updateOne: function(table, objColVals, condition, cb) {
        // Variable to hold SQL query string
        var queryString = 'UPDATE ' + table;

        queryString += ' SET ';
        queryString += objColVals;
        queryString += ' WHERE ';
        queryString += condition;

        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

// Exports the ORM
module.exports = orm;
