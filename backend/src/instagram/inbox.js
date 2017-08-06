var Client = require('instagram-private-api').V1;

module.exports = function(session){
	var inbox = {
		session: session,
		getThreads: function(){
			return new Promise((resolve, reject) => {
				var feed = new Client.Feed.Inbox(inbox.session);

				feed.get().then((threads) => {
					resolve(threads);
				});
			})
		}
	};

	return inbox;
}

