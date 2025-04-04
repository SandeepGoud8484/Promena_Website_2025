/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  // images: {
  //   domains: ["your-cdn.com"],
  // },
};

module.exports = nextConfig;
