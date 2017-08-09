var OS = require('os');
var path = require('path');

var Client = require('instagram-private-api').V1;

// TODO: Write other cases

module.exports = function(username, password, id){
	return new Promise((resolve, reject) => {
		var device = new Client.Device(username);
		
		if(process.env.ENV == "development"){
			var storage = new Client.CookieFileStorage(path.join(OS.tmpdir(), 'dev.json'));
		} else {
			var storage = new Client.CookieFileStorage(path.join(OS.tmpdir(), id+'.json'));
		}

		Client.Session.create(device, storage, username, password).then(function(session) {
			resolve(session);
		}).catch((error) => {
			reject(error);
		})
	});
}

