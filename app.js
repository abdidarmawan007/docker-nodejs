var express = require('express');

// Constants
var DEFAULT_PORT = 80;
var PORT = process.env.PORT || DEFAULT_PORT;

// App
var app = express();
app.get('/', function(req, res){
    res.send('Hello World! nodejs run in GCP Kubernetes v7');
});

// Service
app.listen(PORT, function () {
    console.log('Running on port: ' + PORT);
});
