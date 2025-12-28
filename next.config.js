// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fixes the Cross-Origin request warning
  allowedDevOrigins: [
    'http://localhost:3000',
    'http://192.168.100.17:3000',
  ],
};

module.exports = nextConfig;