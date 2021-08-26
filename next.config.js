module.exports = (phase, { defaultConfig }) => {
    /**
     * @type {import('next').NextConfig}
     */
    const nextConfig = {
        trailingSlash: true,
        basePath: process.env.NEXT_PUBLIC_BASE_PATH,
        assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
    };
    return nextConfig;
};
