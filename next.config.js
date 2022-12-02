const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js')
module.exports = async (phase, { defaultConfig }) => {
    /**
     * @type {import('next').NextConfig}
     */
    const nextConfig = {
        /* config options here */
        reactStrictMode: true,
    }
    return withNextra(nextConfig);
}