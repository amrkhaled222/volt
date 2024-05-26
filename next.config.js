/** @type {import('next').NextConfig} */

module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'loremflickr.com',
            },
            {
                protocol: 'http',
                hostname: 'localhost',
            },
        ],
    },
}
