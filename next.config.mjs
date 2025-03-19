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
  async redirects() {
    let redirections = [];
    try {
      const res = await fetch(
        `${process.env.BACKEND_API_URL}/api/redirections`
      );
      const result = await res.json();
      const redirectItems = result.data.map(({ source, destination }) => {
        return {
          source: `/:locale${source}`,
          destination: `/:locale${destination}`,
          permanent: false,
        };
      });

      redirections = redirections.concat(redirectItems);

      return redirections;
    } catch (error) {
      return [];
    }
  },
};

export default nextConfig;
