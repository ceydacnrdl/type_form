/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "http://localhost:5570/:path*",
      },
    ];
  },
};

export default nextConfig;
