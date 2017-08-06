module.exports = function(app) {
	app.controller("LoaderController", function(user, $state) {
		user.checkStatus().then((user) => {
			if(user.status == "ok"){
				$state.go("app.inbox");
			} else {
				$state.go("login");
			}
		});
	});
}
