const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, 'src', 'index.js'),
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle[hash].js'
	},
	mode: 'development',
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public', 'index.html')
		}),
		new CleanWebpackPlugin()
	],
	module: {
		rules: [
			{ 
				use: 'babel-loader', 
				test: /\.js$/,
				exclude: /node_modules/
			},
			{
				use: [
					'style-loader', 
					{
						loader: 'css-loader',
						options: {
							modules: true
						}
					},
					'sass-loader'
				],
				test: /\.scss$/,
				exclude: /node_modules/
			}
		]
	},
	devServer: {
		port: 3000
	}
};