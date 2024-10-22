/** @type {import('next').NextConfig} */

// Detect if running on GitHub Actions
const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  // Get the repository name for use as the base path and asset prefix
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

const nextConfig = {
  assetPrefix, // Use assetPrefix determined by GitHub environment
  basePath,    // Use basePath determined by GitHub environment
  output: 'export',  // Enable static export
  reactStrictMode: true, // Optional, but recommended for debugging

  images: {
    unoptimized: true, // Disable Next.js image optimization for static export
  },
};

module.exports = nextConfig;
