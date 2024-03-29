const config = {
  swcMinify: true,
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  transpilePackages: ["geist"],
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.**.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    {
      protocol: 'https',
      hostname: 'plus.unsplash.com',
    }, 
    
    ],
  },
  async redirects() {
    return [
      {
        source: '/blog/:slug*',
        destination: '/notes/:slug*',
        permanent: true,
      },
    ];
  },
};

export default config;
