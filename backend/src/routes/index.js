module.exports = function(app) {
	var router = require('express').Router();

	router.post('/login', function (req, res) {
		res.send('Birds home page')
	});

	return router;
};

