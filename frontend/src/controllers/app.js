module.exports = function(app) {
	app.controller("AppController", function(user, $state, $scope) {
		$(".splash").hide();

		$scope.goToInbox = function(){
			$state.go("app.inbox");
		}

		user.checkStatus().then(() => {
			if(!user.isAuthenticated()){
				$state.go("loader");
			}
		});
	});
}

