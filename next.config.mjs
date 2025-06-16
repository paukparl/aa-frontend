/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      process.env.NEXT_PUBLIC_IMAGE_HOST && {
        hostname: process.env.NEXT_PUBLIC_IMAGE_HOST.replace(/^https?:\/\//, "").replace(/:\d+$/, ""),
        port: process.env.NEXT_PUBLIC_IMAGE_HOST.match(/:(\d+)$/)?.[1] || "",
      },
    ].filter(Boolean),
  },
  pageExtensions: ["ts", "tsx"],
};

export default nextConfig;
