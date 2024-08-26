/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "xellops-markets-dev.s3.eu-west-2.amazonaws.com", protocol: "https" }
    ]
  }
};

export default nextConfig;
