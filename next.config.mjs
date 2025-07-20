/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
    serverActions: true,
  },
  transpilePackages: ['recharts'], // اضافه کردن این خط
};

export default nextConfig;