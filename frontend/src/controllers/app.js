module.exports = function(app) {
	app.controller("LoaderController", function(user, $state) {
			if(user.status != "ok"){
				$state.go("login");
			}
	});
}

