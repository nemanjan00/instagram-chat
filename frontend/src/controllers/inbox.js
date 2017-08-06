module.exports = function(app) {
	app.controller("InboxController", function(user, $http, $scope) {
		$scope.threads = [];

		user.checkStatus().then(function() {
			if(user.isAuthenticated()){
				$http.get("/instagram/threads").then(function(data){
					$scope.threads = data.data.threads;
					console.log($scope.threads);
				})
			}
		});
	});
}

