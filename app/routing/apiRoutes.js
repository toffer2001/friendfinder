var friendsData = require('../data/friends.js');
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
            var userData = req.body;
            console.log("new user: " , userData);
            var userScores = userData.scores;
            var bestMatch = {
                name: "",
                photo: "",
                friendDifference: Infinity
            }
            var totalDifference = 0;
            for (var i=0; i<friendsData.length; i++){
                var currentFriend = friendsData[i];
                for(var j=0; j<currentFriend.scores.length; j++){
                    var currentFriendScore = currentFriend.scores[j];
                    var currentUserScore = userScores[j];
                    totalDifference += Math.abs(parseInt(currentFriendScore) - parseInt(currentUserScore));
                }
                if (totalDifference <= bestMatch.friendDifference) {
                    bestMatch.name = currentFriend.name;
                    bestMatch.photo = currentFriend.photo;
                    bestMatch.friendDifference = totalDifference;
                }
            }

            friendsData.push(req.body);
            res.json(bestMatch);



    });
}