/** @type {import("next").NextConfig} */
module.exports = {
  experimental: {
    appDir: true,
  },
  webpack(config, { webpack }) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  },
  images: {
    domains: ['cdn.imagin.studio'],
  },
};
