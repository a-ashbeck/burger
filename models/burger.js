// Require dependencies
var connection = require('../config/connection.js');

// Export function object
module.exports = {
    allBurgers: burgers,
    create: create,
    update: update
};

// Function to return an object of uneaten and devoured burgers
function burgers(cb) {
    var allBurgersObject = {};
    uneatenBurgers(function(data) {
        allBurgersObject.uneaten = data;
        devouredBurgers(function(data) {
            allBurgersObject.devoured = data;
            cb(allBurgersObject);
        });
    });
}

// Function to gather all uneaten burgers
function uneatenBurgers(cb) {
    connection.query('SELECT * FROM burgers WHERE devoured = false',
        function(err, uneatenData) {
            if (err) throw err;
            cb(uneatenData);
        });
}

// Function to gather all devoured burgers
function devouredBurgers(cb) {
    connection.query('SELECT * FROM burgers WHERE devoured = true',
        function(err, devouredData) {
            if (err) throw err;
            cb(devouredData);
        });
}

// Function to add a new burger to the DB
function create(newBurgerName, cb) {
    connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [newBurgerName],
        function(err, result) {
            if (err) throw err;
            cb();
        });
}

// Function to update the DB for a devoured burger
function update(devouredBurgerID, cb) {
    connection.query("UPDATE burgers SET devoured = true WHERE id = ?", [devouredBurgerID],
        function(err, result) {
            if (err) throw err;
            cb();
        });
}
