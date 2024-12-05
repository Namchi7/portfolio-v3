/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dczhwrate/image/upload/v1733060460/aman_portfolio_v3/**",
      },
    ],
  },
};

export default nextConfig;
