var OS = require('os');
var path = require('path');

var Client = require('instagram-private-api').V1;

// TODO: Write other cases

module.exports = function(username, password){
	return new Promise((resolve, reject) => {
		var device = new Client.Device(username);
		var storage = new Client.CookieFileStorage(path.join(OS.tmpdir(), username+'.json'));

		Client.Session.create(device, storage, username, password).then(function(session) {
			resolve(session);
		}).catch((error) => {
			reject(error);
		})
	});
}

