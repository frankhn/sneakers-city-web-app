const withPlugins = require("next-compose-plugins");
const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const nextRuntimeDotenv = require("next-runtime-dotenv");

const withConfig = nextRuntimeDotenv({ public: ["API_URL", "API_KEY"] });

const nextConfig = {
    publicRuntimeConfig: {
        API_URL: process.env.API_URL,
        STATIC_PATH: process.env.STATIC_PATH,
    },
};

module.exports = withConfig(
    withPlugins([[withCSS], [withSass]], nextConfig)
);
