const withPlugins = require('next-compose-plugins');

module.exports = (phase, { defaultConfig }) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            trailingSlash: true,
            basePath: process.env.NEXT_PUBLIC_BASE_PATH,
            assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
        };
    }

    return {
        trailingSlash: true,
        basePath: process.env.NEXT_PUBLIC_BASE_PATH,
        assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
    };
};
