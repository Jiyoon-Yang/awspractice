/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  rewrites() {
    return [
      {
        source: "/mynaver3",
        destination: "https://www.naver.com",
      },
    ];
  },
};

export default nextConfig;
