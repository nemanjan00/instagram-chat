var logSymbols = require('log-symbols');
var portastic = require('portastic');

module.exports = function(){
	return new Promise((resolve, reject) => {
		console.info(logSymbols.info, "deciding which port to use. ");

		if(process.env.PORT == undefined){
			portastic.find({min: 8000, max: 8080}).then((ports) => {
				console.log(logSymbols.success, "found random port to use. ");
				resolve(ports[1]);
			}).catch((err) => {
				console.error(logSymbols.error, err);

				reject(err);
			});
		} else {
			console.log(logSymbols.success, "found port in enviroment variable. ");
			resolve(process.env.PORT);
		}
	});
}

