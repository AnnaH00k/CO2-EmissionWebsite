// next.config.js

const nextConfig = {
    basePath: process.env.NODE_ENV === 'production' ? '/co2-zone' : '',
};

export default nextConfig;
