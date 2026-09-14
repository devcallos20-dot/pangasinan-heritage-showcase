/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Required for GitHub Pages
  output: "export",

  // Your GitHub repository name
  basePath: "/pangasinan-heritage-showcase",

  // Helps GitHub Pages handle routes correctly
  trailingSlash: true,

  // GitHub Pages cannot run Next.js image optimization
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "**.staticflickr.com" },
    ],
  },
};

export default nextConfig;