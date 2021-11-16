const path = require("path");

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	devtool: "inline-source-map",
	module: {
		rules: [
			{
				test: /\.s[ac]ss/i,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader',
				],
			},
			{
				test: /\.(jpeg|jpg|png|svg|gif)/i,
				use: 'assets/resource'
			}
		],
	}
};

