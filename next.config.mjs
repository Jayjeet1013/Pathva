/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.auraui.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
