/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['randomuser.me', 'localhost', "127.0.0.1"],
  },
  env: {
    BASE_URL: process.env.BASE_URL,
    PROJECT_NAME: process.env.PROJECT_NAME,
  },
}

module.exports = nextConfig