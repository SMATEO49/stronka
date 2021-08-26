const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([
    {
        trailingSlash: true,
        basePath: '',
        assetPrefix: 'https://SMATEO49.github.io/stronka',
    },
]);
