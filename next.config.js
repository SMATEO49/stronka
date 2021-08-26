const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

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
