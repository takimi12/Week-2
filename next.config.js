// next.config.js
module.exports = {
	pageExtensions: ["ts", "tsx", "mdx"],
	experimental: {
		typedRoutes: false,
		mdxRs: true,
	},
	images: {
		domains: ["naszsklep-api.vercel.app"],
	},
};
