const config = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  transpilePackages: ["geist"],
  // Turbopack (default since Next 16) uses its own native file watcher and
  // doesn't need the webpack polling workaround this project used to carry
  // for iCloud-synced folders — the project no longer lives in one anyway.
  // If hot reload ever breaks again on a new machine/folder, that workaround
  // can come back as a `turbopack` config instead of a `webpack` one.
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
