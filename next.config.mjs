/** @type {import('next').NextConfig} */

// next.config.js
const isGithubActions = process.env.GITHUB_ACTIONS || false;
let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  // Set basePath and assetPrefix based on your GitHub repository name
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

const nextConfig = {
    basePath: '/frontend-mentor-nft-preview-card-component', 
  assetPrefix: '/frontend-mentor-nft-preview-card-component/', 
  assetPrefix,
  basePath,
  output: 'export',
  reactStrictMode: true, 
    images: {
      unoptimized: true,
        domains: ['frontend-mentor-nft-preview-card-component']
    }
};

export default nextConfig;
