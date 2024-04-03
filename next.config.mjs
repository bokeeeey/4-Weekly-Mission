/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains는 권장하지 않는 스타일
    // domains: ["codeit-images.codeit.com"],
    remotePatterns: [
      // folder page images
      {
        protocol: "https",
        hostname: "codeit-images.codeit.com",
      },
      {
        protocol: "https",
        hostname: "yt3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "assets.vercel.com",
      },
      {
        protocol: "https",
        hostname: "s.pstatic.net",
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
      },
      {
        protocol: "https",
        hostname: "i1.daumcdn.net",
      },
      {
        protocol: "https",
        hostname: "website-prisma.vercel.app",
      },
      {
        protocol: "https",
        hostname: "testing-library.com",
      },
      {
        protocol: "https",
        hostname: "storybook.js.org",
      },
      {
        protocol: "https",
        hostname: "github.com",
      },
      {
        protocol: "https",
        hostname: "legacy.reactjs.org",
      },
      {
        protocol: "https",
        hostname: "codeit.kr",
      },

      // shared page images
      {
        protocol: "https",
        hostname: "codeit-frontend.codeit.com",
      },
      {
        protocol: "https",
        hostname: "reactjs.org",
      },
      {
        protocol: "https",
        hostname: "tanstack.com",
      },
      {
        protocol: "https",
        hostname: "static.cdninstagram.com",
      },
    ],
  },
};

export default nextConfig;
