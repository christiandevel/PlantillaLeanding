const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    
	devServer: {
		port: 3000,
		open: true
	},

	entry: "./src/app.js",
	output: {
		path:path.resolve(__dirname, 'dist'),
		filename: "[name].js"
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.pug'
		}),
		new MiniCssExtractPlugin(),
		],
		module: {
			rules: [
        {
          test: /\.(css|scss)$/,
          use: ['style-loader', 'css-loader']
        },
				{ 
					test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
					loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'assets/fonts/',
					}
				},
				{
					test: /\.(png|jpe?g|gif)$/i,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[name].[ext]',
								outputPath: 'assets/images/',
							},
						},
					],
				},
				{ 
					test: /\.pug$/,
					use: ['pug-loader']
				},
			]
		}
}