/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["scontent.fcmb1-2.fna.fbcdn.net"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
