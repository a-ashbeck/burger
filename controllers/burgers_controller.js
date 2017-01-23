// Require dependencies
var express = require('express');
var burger = require('../models/burger.js');

// Export controller defined routes
module.exports = function(app) {
    // Get all burgers to be displayed
    app.get('/', function(request, response) {
        burger.allBurgers(function(burgerData) {
            response.render('index', {
                uneatenBurgers: burgerData.uneaten,
                devouredBurgers: burgerData.devoured
            });
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
        burger.create(newBurger, function() {
            response.redirect('/');
        });
    });

    // Update burger state in DB
    app.put('/:id', function(request, response) {
        burger.update(request.params.id, function() {
            response.redirect('/');
        });
    });
};