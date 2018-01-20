var config = {};

config.db = {};
// the URL shortening host - shortened URLs will be this + baseHash ID

// i.e.: http://localhost:5000/3Ys
config.webhost = 'http://localhost:5000/';

// your MongoDB host and database name
config.db.host = 'mongodb://localhost';
config.db.port = 27017;
config.db.name = 'heroku_6srjdlq5';
config.db.collections = ['urls', 'counters'];

module.exports = config;
