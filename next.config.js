const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([
    {
        trailingSlash: true,
        basePath: 'https://SMATEO49.github.io',
        assetPrefix: '/stronka',
    },
]);
