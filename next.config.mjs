/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/v1/:path*",
        destination: `${process.env.APP_URL}/api/v1/:path*`,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**.cloudinary.com",
        pathname: "/dwu9gpuhu/**",
        port: "",
      },
    ],
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
