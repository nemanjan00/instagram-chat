module.exports = function(app) {
	app.controller("AppController", function(user, $state) {
		$(".splash").hide();

		user.checkStatus().then(() => {
			if(!user.isAuthenticated()){
				$state.go("loader");
			}
		});
	});
}

