/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['192.168.10.100', 'localhost'],
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;