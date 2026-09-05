// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Silences the "inferred workspace root" warning caused by the stray
  // package-lock.json in your home directory.
  turbopack: {
    root: __dirname,
  },

  // Fixes the Cross-Origin request warning when testing from another device.
  allowedDevOrigins: [
    'http://localhost:3000',
    'http://192.168.100.207:3000',
  ],
};

module.exports = nextConfig;