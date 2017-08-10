module.exports = function(app) {
	app.controller("InboxController", function(user, $http, $scope, $state, $rootScope, $interval) {
		$scope.threads = [];

		if($rootScope.threads != undefined){
			$scope.threads = $rootScope.threads;
		}

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

		}

		$scope.playNotification = function(){
			var audioElement = document.createElement('audio');
			audioElement.setAttribute('src', "/notification.mp3");
			audioElement.play();
		}

		$scope.loadMore = function(){
			if($scope.loaded && !$scope.end){
				$scope.loaded = false;

				$http.get("/instagram/threads/"+$scope.cursor).then(function(data){
					$scope.threads = $scope.threads.concat(data.data.threads);
					$rootScope.threads = $scope.threads;

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

		$scope.isSeen = function(thread){
			return thread.items[0].id <= (thread.itemsSeenAt[Object.keys(thread.itemsSeenAt)[0]] || {itemId: 0}).itemId;
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

		if($rootScope.running == undefined){
			$rootScope.running = false;
		}

		user.checkStatus().then(function() {
			if(user.isAuthenticated()){
				if(!$rootScope.running){
					$interval(function(){
						$http.get("/instagram/threads").then(function(data){
							if($scope.threads[0].items[0].id != data.data.threads[0].items[0].id){
								$rootScope.threads = $scope.threads;
								$scope.threads = data.data.threads;
								$scope.cursor = data.data.cursor;

								sync($scope.threads)
								$scope.playNotification();
							}
						});
					}, 3000);

					$rootScope.running = true;
				}

				$http.get("/instagram/threads").then(function(data){
					$scope.threads = data.data.threads;
					$rootScope.threads = $scope.threads;

					$scope.cursor = data.data.cursor;

					sync($scope.threads)

					$scope.loaded = true;
				})
			}
		});
	});
}

