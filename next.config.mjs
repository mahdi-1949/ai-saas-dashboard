/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_ACTIONS === 'true';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages ? '/ai-saas-dashboard' : '',
  assetPrefix: isGithubPages ? '/ai-saas-dashboard/' : '',
};

export default nextConfig;
