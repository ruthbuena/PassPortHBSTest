const
  express = require('express'),
  path = require('path'),
  app = express();

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.redirect('/home');
  });

  app.get('/home', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/home.html'))
  });
};
