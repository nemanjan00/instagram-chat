module.exports = function(app) {
	app.directive('myEnter', function () {
		return function (scope, element, attrs) {
			element.bind("keydown keypress", function (event) {
				if(event.which === 13) {
					scope.$apply(function (){
						scope.$eval(attrs.myEnter);
					});

					event.preventDefault();
				}
			});
		};
	});

	app.directive('logout', function (user, $state) {
		return {
			restrict: "EA",
			link: function (scope, element, attrs) {
				element.bind('click', function (event) {
					user.logout().then(function(){
						$state.go("login", {}, {reload: true});
					});
				});
			}
		};
	});

	app.factory("user", function($rootScope, $interval, $http){
		var user = {
			status: undefined,
			user: undefined,

			autoStatusChecker: function(){
				user.checkStatus();
				$interval(user.checkStatus, 5000);
			},
			checkStatus: function(){
				var promise = new Promise(function(resolve, reject){
					$http.get("/instagram/status").then(function(data){
						if(data.data.status !== user.status || JSON.stringify(data.data.user) !== JSON.stringify(user.user)){
							user.status = data.data.status;
							user.user = data.data.user;

							$rootScope.$broadcast("userChanged");

							resolve(user);
						}
						else
						{
							resolve(false);
						}
					});
				});

				return promise;
			},

			isAuthenticated: function(){
				return user.status == "ok";
			},

			login: function(username, password){
				var promise = new Promise(function(resolve, reject){
					$http.post("/instagram/login", $.param({username: username, password: password}), {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).then(function(data){
						console.log(data);
						console.log(data.data.status == "ok");
						resolve(data.data.status == "ok");
						user.checkStatus();
					});
				});

				return promise;
			},
			logout: function(){
				localStorage.clear();

				var promise = new Promise(function(resolve, reject){
					$http.get("/instagram/logout").then(function(data){
						user.checkStatus();
						resolve();
					});
				});

				return promise;
			}
		};

		user.autoStatusChecker();

		return user;
	})

	app.controller("LoginController", function($scope, user, $state) {
		$(".splash").hide();

		$scope.login = function(){
			user.login($scope.username, $scope.password).then(function(result){
				if(result){
					if($scope.remember){
						localStorage.setItem("username", $scope.username);
						localStorage.setItem("password", $scope.password);
					}
					$state.go("app.inbox");
				}
				else
				{
					alert("Bad login! ");
				}
			});
		};
	});
}
