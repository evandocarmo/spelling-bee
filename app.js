var express = require("express");
var app = express();
var path = require("path");
var config = require('./config.js');
var mysql = require('mysql');
var bodyParser = require('body-parser');

var connection = mysql.createPool(config.development);

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/index.html'));
    //__dirname : It will resolve to your project folder.
});

app.get('/gameJunior', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/gameJunior.html'));
});

app.get('/gameBasic', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/gameBasic.html'));
});

app.get('/list', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/list.html'));
});

app.get('/rankJunior', function(req, res) {
    connection.query('SELECT * FROM rankJunior;', function(error, results, fields) {
        if (error) throw error;
        res.json(results);
    })
})

app.get('/rankBasic', function(req, res) {
    connection.query('SELECT * FROM rankBasic;', function(error, results, fields) {
        if (error) throw error;
        res.json(results);
    })
})

app.post('/postRankJunior', function(req, res) {
    var namePointsParams = [req.body.name, req.body.points];
    var pointsNameParams = [req.body.points, req.body.name];
    connection.query('SELECT * FROM rankJunior;', function(error, results, fields) {
        if (error) throw error;
        else {
            var existingPlayer = false;
            var playerPoints;
            for (var player in results) {
                if (results[player].name === req.body.name)
                    existingPlayer = true;
                playerPoints = results[player].points;
            }
            if (existingPlayer) { //player already exists.
                if (req.body.points > playerPoints) { //new highscore
                    connection.query('UPDATE rankJunior set points = ? where name = ?', pointsNameParams, function(error) {
                        if (error) throw error;
                    })
                } //else { //player exists but it's not highscore }
            } else { //first time player, obviously it's a highscore
                connection.query('INSERT INTO rankJunior (name,points) values(?,?)', namePointsParams, function(error) {
                    if (error) throw error;
                })
            }
        }
    })
})

app.post('/postRankBasic', function(req, res) {
    var namePointsParams = [req.body.name, req.body.points];
    var pointsNameParams = [req.body.points, req.body.name];
    connection.query('SELECT * FROM rankBasic;', function(error, results, fields) {
        if (error) throw error;
        else {
            var existingPlayer = false;
            var playerPoints;
            for (var player in results) {
                if (results[player].name === req.body.name)
                    existingPlayer = true;
                playerPoints = results[player].points;
            }
            if (existingPlayer) { //player already exists.
                if (req.body.points > playerPoints) { //new highscore
                    connection.query('UPDATE rankBasic set points = ? where name = ?', pointsNameParams, function(error) {
                        if (error) throw error;
                    })
                } //else { //player exists but it's not highscore }
            } else { //first time player, obviously it's a highscore
                connection.query('INSERT INTO rankBasic (name,points) values(?,?)', namePointsParams, function(error) {
                    if (error) throw error;
                })
            }
        }
    })
})

app.listen(process.env.PORT, process.env.IP);
console.log('listening!');