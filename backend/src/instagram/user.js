var Client = require('instagram-private-api').V1;

module.exports = function(session){
	var user = {
		session: session,
		getById: function(id){
			return new Promise((resolve, reject) => {
				Client.Account.getById(user.session, id).then(function(user){
					resolve(user.getParams());
				});
			})
		}
	};

	return user;
}

