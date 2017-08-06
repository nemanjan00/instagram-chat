require("./css/signin.css");
require("./css/theme.css");

var app = angular.module('top.nemanja.instagram-chat', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/login");

	$stateProvider
		.state('login', {
			url: "/login",
			templateUrl: "/templates/login.html",
			controller: "LoginController"
		})
		.state('app', {
			url: "/register",
			controller: "RegisterController",
			templateUrl: "/templates/register.html"
		})
		.state('inbox', {
			abstract: true,
			url: "/app",
			templateUrl: '/templates/app.html',
		})
		.state('thread', {
			abstract: true,
			url: "/appa",
			templateUrl: '/templates/app.html',
		});
});

require("./controllers")(app);

