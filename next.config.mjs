/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media.fromkian.com',
                port: '',
                pathname: '/**'
            }
        ]
    }
};

export default nextConfig;
