const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.ipfs.io",
        port: "",
      },
      {
        protocol: "https",
        hostname: "global.discourse-cdn.com",
      },
    ],
  },
};
