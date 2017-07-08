
var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var rooms = require('./rooms.json');
var app = express();
var cors = require('cors');

app.use( express.static(__dirname+'/public'));
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./app/routes/api')(app);

app.all("/*", function(req, res, next) {
        res.sendfile(__dirname + '/public/index.html' );
});

app.set('port', (process.env.PORT || 3000));


app.listen(3000, function() {
    console.log("App running on port 3000");
});
