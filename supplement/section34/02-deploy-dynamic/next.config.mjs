/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  // output: "export", => 동적페이지([boardId], SSR) 배포 시 out폴더 export 안됨
};

export default nextConfig;
