module.exports = function(app) {
	app.controller("LoaderController", function(user, $state) {
		user.checkStatus().then(() => {
			if(user.isAuthenticated()){
				$state.go("app.inbox");
			} else {
				if(localStorage.getItem("username") !== null && localStorage.getItem("password") !== null){
					user.login(localStorage.getItem("username"), localStorage.getItem("password")).then(function(result){
						if(result){
							$state.go("app.inbox");
						} else {
							$state.go("login");
						}
					});
				} else {
					localStorage.clear();
					$state.go("login");
				}
			}
		});
	});
}
