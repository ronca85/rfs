const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
	module: {
		rules: [
			{
				// test: /\.css$/,
				// use: [
				// 	// In webpack, the order in which loaders appear in the configuration is of high importance.
				// 	// The following configuration is invalid:
				// 	//
				// 	// "css-loader",
				// 	// "style-loader",
				// 	//
				// 	// Here "style-loader" appears before "css-loader". But style-loader is for injecting the style in the page, not for loading the actual CSS file.
				// 	//
				// 	// The following configuration instead is valid:
				// 	//
				// 	"style-loader",
				// 	"css-loader",
				// ],
				test: /\.scss$/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader",
				],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					"babel-loader",
				],
			}
		]
	},
	entry: {
		index: path.resolve(__dirname, "src", "index.js"),
	},
	output: {
		path: path.resolve(__dirname, "build"),
	},
	devServer: {
		open: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "src", "index.html"),
		})
	],
	optimization: {
		// splitChunks: { chunks: "all" }
	},
};
