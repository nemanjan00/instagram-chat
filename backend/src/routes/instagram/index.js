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
			res.send({
				status: "ok"
			})
		} else {
			res.send({
				status: "error"
			})
		}
	});

	return router;
};

