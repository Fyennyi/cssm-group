/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
// The repository name is passed from the GitHub Actions workflow.
const repoName = process.env.REPOSITORY_NAME;

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Required for GitHub Pages, since the site is hosted at a subpath.
  basePath: isProd && repoName ? `/${repoName}` : '',
  assetPrefix: isProd && repoName ? `/${repoName}/` : '',
};

module.exports = nextConfig;
