/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		typedRoutes: true,
	},
	images: {
		domains: ["naszsklep-api.vercel.app"], // Dodaj domenę hosta obrazu tutaj
	},
};

module.exports = nextConfig;
