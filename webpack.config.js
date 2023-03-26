const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.ts',
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.ts$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	plugins: [
		new HtmlWebpackPlugin({
		template: 'public/index.html',
		}),
		new CopyWebpackPlugin({
		patterns: [
			{
			from: 'src/assets',
			to: 'assets',
			},
		],
		}),
	],
	devServer: {
		static: path.join(__dirname, 'dist'),
		compress: true,
		port: 9000,
	},
};
