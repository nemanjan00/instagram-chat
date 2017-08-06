module.exports = function(app) {
	app.controller("InboxController", function(user, $http, $scope, $state, $rootScope) {
		$scope.threads = [];

		setTimeout(() => {
			$scope.loaded = true;
		}, 500);

		$scope.cursor = null;

		$scope.goToThread = function(thread){
			$state.go("app.thread", {id: thread.id});
		}

		function sync(threads){
			if($rootScope.users == undefined){
				$rootScope.users = {};
			}

			threads.forEach((thread) => {
				thread.accounts.forEach((account) => {
					$rootScope.users[account.id] = account;
				});
			});

			console.log($rootScope.users);
		}

		$scope.loadMore = function(){
			if($scope.loaded && !$scope.end){
				$scope.loaded = false;

				$http.get("/instagram/threads/"+$scope.cursor).then(function(data){
					$scope.threads = $scope.threads.concat(data.data.threads);

					sync($scope.threads)

					if($scope.cursor == data.data.cursor){
						$scope.end = true;
					}

					$scope.cursor = data.data.cursor;
					$scope.loaded = true;
				})
			}
		}

		$scope.showFullName = function(thread){
			return thread.threadType == "private" && thread.accounts.length == 1 && thread.accounts[0].fullName != "";
		}

		$scope.fullNameList = function(thread){
			if(thread.accounts.length > 1){
				var accounts = thread.accounts.map((account) => {
					if(account.fullName == ""){
						account.fullName = account.username;
					}

					return account;
				});

				accounts = accounts.filter((account, key) => {
					return key < 4;
				});

				accounts = accounts.map((account) => {
					return account.fullName;
				})

				return "("+accounts.join(", ")+((thread.accounts.length > accounts.length)?"...":"")+")";
			} else {
				return "";
			}
		}

		user.checkStatus().then(function() {
			if(user.isAuthenticated()){
				$http.get("/instagram/threads").then(function(data){
					$scope.threads = data.data.threads;

					$scope.cursor = data.data.cursor;

					sync($scope.threads)
					console.log($scope.threads);
				})
			}
		});
	});
}

