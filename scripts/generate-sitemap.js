const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');

const articles = require('../data/articles');

const BASE_URL = 'https://cssm.pp.ua';

async function generateSitemap() {
  const smStream = new SitemapStream({ hostname: BASE_URL });

  const routes = [
    '/',
    ...articles
      .filter((article) => !article.hidden && !article.isDraft)
      .map((article) => `/article/${article.id}`),
  ];

  for (const url of routes) {
    smStream.write({
      url,
      changefreq: 'monthly',
      priority: url === '/' ? 1.0 : 0.8,
      lastmodISO: new Date().toISOString(),
    });
  }

  smStream.end();

  const sitemapBuffer = await streamToPromise(smStream);
  const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemapBuffer.toString('utf8'));
  console.log(`Sitemap generated at ${sitemapPath}`);
}

async function main() {
  try {
    await generateSitemap();
  } catch (error) {
    console.error('Failed to generate sitemap', error);
    process.exit(1);
  }
}

main();
