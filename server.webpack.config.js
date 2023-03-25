const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const package = require("./package.json");

const {
	NODE_ENV = 'production',
} = process.env;

module.exports = {
	entry: path.resolve(__dirname, "./src/server.ts"),
	mode: NODE_ENV,
	target: 'node',
	output: {
		path: path.resolve(__dirname, 'dist', 'server'),
		filename: 'server.js'
	},
	resolve: {
		extensions: ['.ts', '.js'],
	}
};