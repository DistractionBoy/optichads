const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
module.exports = {
  env: {
    RAINBOWKIT_PROJECTID: "9d903415c2b343d2348abe6ab7401bfa",
    ALCHEMY_OPT_SEPOLIA_BASEURL: "https://opt-sepolia.g.alchemy.com/v2/",
  },
  reactStrictMode: true,
  i18n,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ipfs.io",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "global.discourse-cdn.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "*.arweave.net",
        pathname: "**",
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
