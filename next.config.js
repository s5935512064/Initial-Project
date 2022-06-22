const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")(["@fancyapps/ui", "vanilla-cookieconsent"]);
const webpack = require("webpack");
const withImages = require('next-images')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['scontent-kut2-2.xx.fbcdn.net', 'polofootballpark.com', 'scontent.fbkk10-1.fna.fbcdn.net', "scontent-kut2-1.xx.fbcdn.net"],
    formats: ['image/avif', 'image/webp'],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
      })
    );
    if (isServer) {
      require("./scripts/sitemap-generator");
    }
    return config;
  },
}

module.exports = withPlugins([nextConfig, withTM]);