module.exports = function(app) {
	require("./loader")(app);
	require("./app")(app);
	require("./login")(app);
}
