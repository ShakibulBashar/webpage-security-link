/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ['192.168.10.100', 'localhost'],
};

export default nextConfig;