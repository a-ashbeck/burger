// Require dependencies
var express = require('express');
var burger = require('../models/burger.js');

// Export controller defined routes
module.exports = function(app) {
    // Get all burgers to be displayed
    app.get('/', function(request, response) {
        burger.selectAll(function(burgerData) {
            // Object to ship up to view
            var incomingBurgerDataObject = {
                burgers: burgerData
            }

            // Ship it up
            response.render('index', incomingBurgerDataObject);
        });
    });

    // Post function to add new burger
    app.post('/', function(request, response) {
        var newBurger = request.body.burger;
        // if no burger is defined just return
        if (newBurger === '') {
            response.redirect('/');
            return;
        }
        // Create the new burger in DB
        burger.insertOne(newBurger, function() {
            response.redirect('/');
        });
    });

    // Update burger state in DB
    app.put('/:id', function(request, response) {
        // Set condition variable
        var id = 'id = ' + request.params.id;

        // Update the burger
        burger.updateOne(id, function() {
            response.redirect('/');
        });
    });
};
