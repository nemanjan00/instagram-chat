var Client = require('instagram-private-api').V1;

module.exports = function(session){
	var inbox = {
		session: session,
		feed : new Client.Feed.Inbox(session)
	};
}

