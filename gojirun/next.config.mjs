/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '', // Leave it empty if no specific port is needed
        pathname: '/**', // This allows all images from this domain
      },
    ],
  },
};

export default nextConfig;
