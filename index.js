// Utility dependencies

var logSymbols = require('log-symbols');
var getPort = require('./backend/src/getPort');

// Express

var session = require('express-session')
var express = require('express');

// Express initialization

getPort().then((port) => {
	var app = express();

	app.set("port", process.env.port || port);

	app.use('/', require('./backend/src/routes')(app));

	app.listen(app.get("port"), function () {
		console.log(logSymbols.success, 'instagram chat is listening on port '+app.get('port')+'.');
	});
});

