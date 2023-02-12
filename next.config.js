/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportPathMap: function() {
    return {
      "/": { page: "/birthday-calculator" },
    };
  },
};

module.exports = nextConfig;
