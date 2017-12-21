var friends = require('../data/friends.js');
var path = require('path');

module.exports = function (app) {

    // GET Requests
    // Shows users json data on the page

    app.get('/api/friends', function (req, res) {
        res.json(friendsData);
    });


    // POST Requests
    // Handles data when users submit form

    app.post('/api/friends', function (req, res) {
        if (friendsData.length < 5) {
            friendsData.push(req.body);
            res.json(true);
        }

    });
}