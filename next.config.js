const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
module.exports = {
  env: {
    ALCHEMY_APIKEY: "XuNJnb3h2RUT0lfu5svHz_iSZxw3s9RI",
    OPENSEA_SALES_APIKEY: "813f086c4d244ad98c36ac93763e27a7",
    OPENSEA_ANALYTICS_APIKEY: "1bb083550c2f40de87d08ee98085ae9f",
    RAINBOWKIT_PROJECTID: "9d903415c2b343d2348abe6ab7401bfa",
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
