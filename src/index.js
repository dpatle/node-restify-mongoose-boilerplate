const restify = require('restify'),
    server = restify.createServer(),
    dbConfig = require('./config/db.config.js'),
    mongoose = require('mongoose'),
    notes = require('./app/controllers/note.controller.js');

server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.CORS());
restify.CORS.ALLOW_HEADERS.push('authorization');

server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    return next();
}
);

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// test route
server.get("/test", (req, res) => {
    res.send('this is test');
});

// Create a new Note
server.post('/notes', notes.create);

// Retrieve all Notes
server.get('/notes', notes.findAll);

// Retrieve a single Note with noteId
server.get('/notes/:noteId', notes.findOne);

// Update a Note with noteId
server.put('/notes/:noteId', notes.update);

// Delete a Note with noteId
server.del('/notes/:noteId', notes.delete);

server.listen(8081, function () {
    console.log('%s listening at %s', server.name, server.url);
});

module.exports = server;
