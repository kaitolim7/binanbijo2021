/** @type {import('next').NextConfig} */

// const withImages = require("next-images");
// const withTM = require("next-transpile-modules")(["@madzadev/image-slider"]);
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["images.microcms-assets.io"],
  },
};

// module.exports = withImages(withTM());
