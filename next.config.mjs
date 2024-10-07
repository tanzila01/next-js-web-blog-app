/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: false,
    images:{
        remotePatterns:[
          {
            protocol: 'https',
            hostname: "images.pexels.com"
          },
          {
            protocol: 'https',
            hostname: "cdn.psychologytoday.com"
          },
          {
            protocol: 'https',
            hostname: "images.squarespace-cdn.com"
          }
        ]
      }
};

export default nextConfig;
