webpackJsonp([0],{

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(106);\n__webpack_require__(107);\n\nvar app = angular.module('top.nemanja.instagram-chat', ['ui.router']);\n\napp.config(function($stateProvider, $urlRouterProvider) {\n\t$urlRouterProvider.otherwise(\"/login\");\n\n\t$stateProvider\n\t\t.state('login', {\n\t\t\turl: \"/login\",\n\t\t\ttemplateUrl: \"/templates/login.html\",\n\t\t\tcontroller: \"LoginController\"\n\t\t})\n\t\t.state('app', {\n\t\t\turl: \"/register\",\n\t\t\tcontroller: \"RegisterController\",\n\t\t\ttemplateUrl: \"/templates/register.html\"\n\t\t})\n\t\t.state('inbox', {\n\t\t\tabstract: true,\n\t\t\turl: \"/app\",\n\t\t\ttemplateUrl: '/templates/app.html',\n\t\t})\n\t\t.state('thread', {\n\t\t\tabstract: true,\n\t\t\turl: \"/appa\",\n\t\t\ttemplateUrl: '/templates/app.html',\n\t\t});\n});\n\n__webpack_require__(108)(app);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTA1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3JjL2FwcC5qcz8wZGU4Il0sInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoXCIuL2Nzcy9zaWduaW4uY3NzXCIpO1xucmVxdWlyZShcIi4vY3NzL3RoZW1lLmNzc1wiKTtcblxudmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCd0b3AubmVtYW5qYS5pbnN0YWdyYW0tY2hhdCcsIFsndWkucm91dGVyJ10pO1xuXG5hcHAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcblx0JHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZShcIi9sb2dpblwiKTtcblxuXHQkc3RhdGVQcm92aWRlclxuXHRcdC5zdGF0ZSgnbG9naW4nLCB7XG5cdFx0XHR1cmw6IFwiL2xvZ2luXCIsXG5cdFx0XHR0ZW1wbGF0ZVVybDogXCIvdGVtcGxhdGVzL2xvZ2luLmh0bWxcIixcblx0XHRcdGNvbnRyb2xsZXI6IFwiTG9naW5Db250cm9sbGVyXCJcblx0XHR9KVxuXHRcdC5zdGF0ZSgnYXBwJywge1xuXHRcdFx0dXJsOiBcIi9yZWdpc3RlclwiLFxuXHRcdFx0Y29udHJvbGxlcjogXCJSZWdpc3RlckNvbnRyb2xsZXJcIixcblx0XHRcdHRlbXBsYXRlVXJsOiBcIi90ZW1wbGF0ZXMvcmVnaXN0ZXIuaHRtbFwiXG5cdFx0fSlcblx0XHQuc3RhdGUoJ2luYm94Jywge1xuXHRcdFx0YWJzdHJhY3Q6IHRydWUsXG5cdFx0XHR1cmw6IFwiL2FwcFwiLFxuXHRcdFx0dGVtcGxhdGVVcmw6ICcvdGVtcGxhdGVzL2FwcC5odG1sJyxcblx0XHR9KVxuXHRcdC5zdGF0ZSgndGhyZWFkJywge1xuXHRcdFx0YWJzdHJhY3Q6IHRydWUsXG5cdFx0XHR1cmw6IFwiL2FwcGFcIixcblx0XHRcdHRlbXBsYXRlVXJsOiAnL3RlbXBsYXRlcy9hcHAuaHRtbCcsXG5cdFx0fSk7XG59KTtcblxucmVxdWlyZShcIi4vY29udHJvbGxlcnNcIikoYXBwKTtcblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9mcm9udGVuZC9zcmMvYXBwLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///105\n");

/***/ }),

/***/ 106:
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTA2LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3JjL2Nzcy9zaWduaW4uY3NzP2JjN2IiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Zyb250ZW5kL3NyYy9jc3Mvc2lnbmluLmNzc1xuLy8gbW9kdWxlIGlkID0gMTA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///106\n");

/***/ }),

/***/ 107:
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTA3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3JjL2Nzcy90aGVtZS5jc3M/NjQwNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZnJvbnRlbmQvc3JjL2Nzcy90aGVtZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEwN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///107\n");

/***/ }),

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = function(app) {\n\t__webpack_require__(109)(app);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTA4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3JjL2NvbnRyb2xsZXJzL2luZGV4LmpzPzY0NGUiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihhcHApIHtcblx0cmVxdWlyZShcIi4vbG9naW5cIikoYXBwKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZnJvbnRlbmQvc3JjL2NvbnRyb2xsZXJzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///108\n");

/***/ }),

/***/ 109:
/***/ (function(module, exports) {

eval("module.exports = function(app) {\n\tapp.controller(\"LoginController\", function($scope) {\n\t\t$scope.login = function(){\n\t\t\tconsole.log($scope.username);\n\t\t\tconsole.log($scope.password);\n\t\t\tconsole.log($scope.remember);\n\t\t};\n\t});\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTA5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZnJvbnRlbmQvc3JjL2NvbnRyb2xsZXJzL2xvZ2luLmpzPzc2MzMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihhcHApIHtcblx0YXBwLmNvbnRyb2xsZXIoXCJMb2dpbkNvbnRyb2xsZXJcIiwgZnVuY3Rpb24oJHNjb3BlKSB7XG5cdFx0JHNjb3BlLmxvZ2luID0gZnVuY3Rpb24oKXtcblx0XHRcdGNvbnNvbGUubG9nKCRzY29wZS51c2VybmFtZSk7XG5cdFx0XHRjb25zb2xlLmxvZygkc2NvcGUucGFzc3dvcmQpO1xuXHRcdFx0Y29uc29sZS5sb2coJHNjb3BlLnJlbWVtYmVyKTtcblx0XHR9O1xuXHR9KTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vZnJvbnRlbmQvc3JjL2NvbnRyb2xsZXJzL2xvZ2luLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///109\n");

/***/ })

},[105]);