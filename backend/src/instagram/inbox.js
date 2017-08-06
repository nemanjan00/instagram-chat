var Client = require('instagram-private-api').V1;

module.exports = function(session){
	var inbox = {
		session: session,
		getThreads: function(cursor){
			return new Promise((resolve, reject) => {
				var feed = new Client.Feed.Inbox(inbox.session);

				if(cursor){
					feed.setCursor(cursor);
				}

				feed.get().then((threads) => {
					resolve({
						threads: threads,
						cursor: feed.getCursor()
					});
				});
			})
		},
		getMessagess: function(thread, cursor){
			return new Promise((resolve, reject) => {
				var feed = new Client.Feed.ThreadItems(inbox.session, thread);

				if(cursor){
					feed.setCursor(cursor);
				}

				feed.get().then((messagess) => {
					resolve({
						messagess: messagess,
						cursor: feed.getCursor()
					});
				});
			})
		}
	};

	return inbox;
}

