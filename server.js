/**
 * Created by Real on 2017-07-30.
 */

var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    Task = require('./task'),
    bodyParser = require('body-parser');
// var cors = require('cors');
var routes = require('./route');




app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', routes);
app.use('/static', express.static('static'));
// app.use(cors());
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

// routes(app);


app.listen(port);


console.log('Server started on: ' + port);