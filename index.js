#!/usr/bin/env node

module.exports = new Promise((resolve, reject) => {
	// Utility dependencies

	var logSymbols = require('log-symbols');
	var getPort = require('./backend/src/getPort');
	var path = require("path");

	// Express & Utility middleware

	var express = require('express');
	var session = require('express-session')
	var bodyParser = require('body-parser')

	var app = express();

	app.use(bodyParser.urlencoded({
		extended: true
	}));

	app.use(bodyParser.json())

	app.use(express.static(path.join(__dirname, 'frontend/public')));

	app.use(session({
		secret: 'keyboard cat',
		resave: true
	}));

	// Express initialization (app specific stuff)

	getPort().then((port) => {
		app.set("port", process.env.PORT || port);
		app.set("host", process.env.HOST || '0.0.0.0');

		app.use('/', require('./backend/src/routes')(app));

		app.listen(app.get("port"), app.get("host"), function () {
			resolve();
			console.log(logSymbols.success, 'instagram chat is listening on port '+app.get('port')+'.');
		});
	});
});

