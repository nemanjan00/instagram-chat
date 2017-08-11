module.exports = function(app) {
	app.filter('reverse', function() {
		return function(items) {
			return items.slice().reverse();
		};
	});

	app.controller("ThreadController", function(user, $http, $scope, $stateParams, $rootScope, $timeout, $interval) {
		$scope.$on("$destroy",function(){
			if (angular.isDefined($scope.Timer)) {
				$interval.cancel($scope.Timer);
			}
		});

		$scope.thread = [];

		var oldLast;

		$scope.$watch('thread', function() {
			if(oldLast == undefined || oldLast != $scope.thread[0]){
				oldLast = $scope.thread[0]

				$timeout(function(){
					$(".scroll-container").animate({ scrollTop: $(".scroll-container").prop("scrollHeight") }, "slow");
				}, 0);
			}
		});

		var dummyUser = {
			fullName: "Loading",
			picture: "https://media.giphy.com/media/AWzcJsAxKnzLa/giphy.gif",
			username: "sdfsdfsdf"
		}

		var loading = {};

		$scope.getUser = function(id){
			if($rootScope.users[id] != undefined){
				return $rootScope.users[id];
			} else {

				if(loading[id] == undefined){
					loading[id] = true;
					$http.get("/instagram/user/"+id).then(function(data){
						$rootScope.users[data.data.user.id] = data.data.user;
					});
				};

				return dummyUser;
			}
		}

		setTimeout(() => {
			$scope.loaded = true;
		}, 500);

		$scope.cursor = null;

		$scope.getLink = function(id){
			var user = $scope.getUser(id);
			return "https://www.instagram.com/"+user.username;
		}

		$scope.getName = function(id){
			var user = $scope.getUser(id);
			return user.fullName || user.username || "unknown";
		}

		$scope.getPhoto = function(id){
			var user = $scope.getUser(id);
			return user.picture;
		}

		$scope.isDummy = function(id){
			return $rootScope.users[id] == undefined;
		}

		$scope.sendMessage = function(){
			if($scope.message != ""){
				$http.post("/instagram/messagess/"+$stateParams.id, {message: $scope.message}).then(function(data){
					$scope.thread = data.data.items.concat($scope.thread);
				});

				$scope.message = "";
			}
		}

		$scope.loadMore = function(){
			if($scope.loaded && !$scope.end){
				$scope.loaded = false;

				$http.get("/instagram/messagess/"+$stateParams.id+"/"+$scope.cursor).then(function(data){
					var oldHeight = $(".scroll-container").prop("scrollHeight");

					$scope.thread = $scope.thread.concat(data.data.messagess);

					$timeout(function(){
						var newHeight = $(".scroll-container").prop("scrollHeight");

						$(".scroll-container").scrollTop(newHeight - oldHeight);
					}, 0);

					if($scope.cursor == data.data.cursor){
						$scope.end = true;
					}

					$scope.cursor = data.data.cursor;
					$scope.loaded = true;
				})
			}
		}

		user.checkStatus().then(function() {
			if(user.isAuthenticated()){
				$http.get("/instagram/messagess/"+$stateParams.id).then(function(data){
					$scope.thread = data.data.messagess;

					$scope.cursor = data.data.cursor;
				})
			}
		});

		function sync(cursor){
			var request;

			if(cursor == undefined){
				request = $http.get("/instagram/messagess/"+$stateParams.id);
			} else {
				request = $http.get("/instagram/messagess/"+$stateParams.id + "/" + cursor);
			}
			request.then(function(data){
				var found = false;
				var newMessages = [];

				data.data.messagess.forEach(function(message){
					if(!found && $scope.thread[0].id != message.id){
						newMessages.push(message);
					} else {
						found = true;

						return;
					}
				});

				$scope.thread = newMessages.concat($scope.thread);
			})
		}

		$scope.Timer = $interval(function(){
			sync();
		}, 3000)
	});
}

