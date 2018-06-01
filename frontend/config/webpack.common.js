var webpack = require("webpack");
var PreloadWebpackPlugin = require('preload-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

//var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var helpers = require('./helpers');

module.exports = {
	entry: {
		'vendor': './frontend/src/vendor.js',
		'app': './frontend/src/app.js'
	},

	devtool: "source-map",

	module: {
		rules: [
			{
				test: /\.css$/,
				exclude: helpers.root('src', 'app'),
				//loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader?sourceMap'] })
				use: [
					"style-loader", // creates style nodes from JS strings
					"css-loader", // translates CSS into CommonJS
					"sass-loader" // compiles Sass to CSS
				]
			},
			{
				test: /\.css$/,
				include: helpers.root('src', 'app'),
				loader: 'raw-loader'
			},
			{
				test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
				loader: 'file-loader?name=assets/[name].[hash].[ext]'
			},
			{
				test: /\.html$/,
				loader: 'html-loader'
			}
		]
	},
	plugins: [
		//new webpack.optimize.CommonsChunkPlugin({
			//name: ['app', 'vendor']
		//}),
		new HtmlWebpackPlugin({
			template: 'frontend/src/index.ejs'
		}),
		//new PreloadWebpackPlugin({
			//rel: 'preload',
			//as: 'script',
			//include: 'all'
		//}),
		new BundleAnalyzerPlugin()
	]
};

