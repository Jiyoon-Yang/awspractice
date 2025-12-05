import NextFederationPlugin from "@module-federation/nextjs-mf";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "remote-board",
        exposes: {
          "./boards": "./src/components/boards/index.tsx",
          "./boards-detail": "./src/components/boards-detail/index.tsx",
        },
        filename: "static/chunks/remoteEntry.js",
      })
    );
    return config;
  },
};

export default nextConfig;
