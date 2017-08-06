module.exports = function(app) {
	var router = require('express').Router();

	router.post('/login', function (req, res) {
		var login = require("../../instagram/login");

		login(req.body.username, req.body.password).then((session) => {
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

	return router;
};

