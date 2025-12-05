import NextFederationPlugin from "@module-federation/nextjs-mf";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "remote-product",
        exposes: {
          "./products": "./src/components/products/index.tsx",
          "./products-detail": "./src/components/products-detail/index.tsx",
        },
        filename: "static/chunks/remoteEntry.js",
      })
    );
    return config;
  },
};

export default nextConfig;
