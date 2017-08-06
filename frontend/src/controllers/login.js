module.exports = function(app) {
	app.controller("LoginController", function($scope) {
		$scope.login = function(){
			console.log($scope.username);
			console.log($scope.password);
			console.log($scope.remember);
		};
	});
}
