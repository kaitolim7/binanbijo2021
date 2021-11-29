/** @type {import('next').NextConfig} */

// const withImages = require("next-images");
// const withTM = require("next-transpile-modules")(["@madzadev/image-slider"]);
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["images.microcms-assets.io"],
  },
  typescript: {
    // !! 警告 !!
    // あなたのプロジェクトに型エラーがあったとしても、プロダクションビルドを正常に完了するために危険な許可をする。
    // !! 警告 !!
    ignoreBuildErrors: true,
  },
  optimizeFonts: false,
};

// module.exports = withImages(withTM());
