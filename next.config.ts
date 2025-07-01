import { NextConfig } from "next";
import clientEnv from "@/lib/clientEnv";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: clientEnv.NEXT_PUBLIC_IMAGE_HOST.replace(
          /^https?:\/\//,
          "",
        ).replace(/:\d+$/, ""),
        port: clientEnv.NEXT_PUBLIC_IMAGE_HOST.match(/:(\d+)$/)?.[1] || "",
      },
    ].filter(Boolean),
  },
  pageExtensions: ["ts", "tsx"],
  experimental: {
    reactCompiler: true,
  },
};

export default nextConfig;
