const path = require('path')

module.exports = {
	entry: './src/www/index.js',
	output: {
		filename: 'app.bundle.js',
		path: path.resolve(__dirname, 'public/dist')
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules)/,
				loader: "babel-loader",
				options: { presets: ["@babel/env"] }
			}
		]
	},
}

