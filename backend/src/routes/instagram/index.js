var fs = require('fs');
var path = require('path');
var OS = require('os');

module.exports = function(app) {
	var router = require('express').Router();

	if(app.get("sessions") == undefined){
		var sessions = {};

		app.set("sessions", sessions);
	}

	router.post('/login', function (req, res) {
		var login = require("../../instagram/login");

		login(req.body.username, req.body.password, req.session.id).then((session) => {
			var sessions = app.get("sessions");
			sessions[req.session.id] = {
				session: session
			};

			app.set("sessions", sessions);

			res.send({
				status: "ok"
			});
		}).catch((error) => {
			res.send({
				status: "error",
				error: error
			});
		});
	});

	router.get("/status", function(req, res){
		var session = app.get("sessions")[req.session.id];

		if(session){
			if(session.account == undefined){
				session.session.getAccount().then(function(account) {
					session.account = account;

					sessions[req.session.id] = session;
					app.set("sessions", sessions);


					res.send({
						status: "ok",
						user: account.params
					})
				})
			} else {
				res.send({
					status: "ok",
					user: session.account.params
				})
			}
		} else {
			res.send({
				status: "error"
			})
		}
	});

	function threads(req, res){
		console.log(app.get("sessions"));
		console.log(req.session.id);
		var session = app.get("sessions")[req.session.id];
		var cursor = req.params.cursor || null;

		if(session){
			var inbox = require("../../instagram/inbox.js")(session.session);
			inbox.getThreads(cursor).then((data) => {
				var threads = data.threads.map((thread) => {
					return thread.getParams();
				});

				res.send({
					status: "ok",
					threads: threads,
					cursor: data.cursor
				});
			});
		} else {
			res.send({
				status: "error"
			})
		}
	}

	router.get("/threads", threads);
	router.get("/threads/:cursor", threads);

	function messagess(req, res){
		var session = app.get("sessions")[req.session.id];
		var cursor = req.params.cursor || null;

		if(session){
			var inbox = require("../../instagram/inbox.js")(session.session);
			inbox.getMessagess(req.params.thread, cursor).then((data) => {
				var messagess = data.messagess.map((message) => {
					return message.getParams();
				});

				res.send({
					status: "ok",
					messagess: messagess,
					cursor: data.cursor
				});
			});
		} else {
			res.send({
				status: "error"
			})
		}
	}

	router.post("/messagess/:thread", function(req, res){
		var session = app.get("sessions")[req.session.id];

		if(session){
			var inbox = require("../../instagram/inbox.js")(session.session);
			inbox.sendMessage(req.params.thread, req.body.message).then((data) => {
				res.send({
					status: "ok",
					items: data
				});
			});
		} else {
			res.send({
				status: "error"
			})
		}
	});

	router.get("/user/:id", function(req, res){
		var session = app.get("sessions")[req.session.id];

		if(session){
			var user = require("../../instagram/user.js")(session.session);
			user.getById(req.params.id).then((data) => {
				res.send({
					status: "ok",
					user: data
				});
			});
		} else {
			res.send({
				status: "error"
			})
		}
	});

	router.get("/messagess/:thread", messagess);
	router.get("/messagess/:thread/:cursor", messagess);

	router.get("/logout", function(req, res){
		var sessions = app.get("sessions");
		sessions[req.session.id] = undefined;
		app.set("sessions", sessions);

		if(process.env.ENV == "development"){
			var cookies = path.join(OS.tmpdir(), 'dev.json');
		} else {
			var cookies = path.join(OS.tmpdir(), req.session.id+'.json');
		}

		if (fs.existsSync(cookies)) {
			fs.unlinkSync(cookies);
		}

		res.send({
			status: "ok"
		})
	});

	return router;
};

