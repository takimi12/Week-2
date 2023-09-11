// next.config.js
module.exports = {
	pageExtensions: ["ts", "tsx", "mdx"],
	experimental: {
		typedRoutes: false,
		mdxRs: true,
	},
	webpack: (config) => {
		config.module.rules.push({
			test: /\.mdx$/,
			use: [
				{
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-react", "@babel/preset-env"],
					},
				},
				{
					loader: "@mdx-js/loader",
				},
			],
		});
		return config;
	},
	// Inne konfiguracje...
};
