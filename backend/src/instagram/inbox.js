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
					console.log(threads);

					resolve({
						threads: threads,
						cursor: feed.getCursor()
					});
				}).catch((error) => {
					console.log(error);
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
		},

		sendMessage: function(thread, text){
			return new Promise((resolve, reject) => {
				Client.Thread.getById(inbox.session, thread).then(function(thread){
					thread.broadcastText(text).then(function(data){
						resolve(data[0].getParams().items);
					});
				});
			})
		}
	};

	return inbox;
}

