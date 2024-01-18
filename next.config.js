/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: false,
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ["@svgr/webpack"],
		});

		return config;
	},
	async headers() {
		return [
			{
				source: "/(.*)",
				headers: [
					{
						key: "Cross-Origin-Opener-Policy",
						value: "same-origin allow-popups",
					},
				],
			},
		];
	},
	env: {
		GOOGLE_CLIENT_ID:
			"278022160322-ovuqcfjgpul25gdhsv3e37e74pn00tvb.apps.googleusercontent.com",
		BACKEND_ADDRESS: "http://103.46.239.133:8012",
		// BACKEND_ADDRESS: "http://localhost:8000",
		// BACKEND_ADDRESS: "https://5be4-103-81-214-124.ngrok-free.app/google-login",
	},
};
