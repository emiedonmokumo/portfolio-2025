/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://emiedonmokumo.vercel.app',
    generateRobotsTxt: true,
    sitemapSize: 5000,
    exclude: [], // Exclude private routes
    // 👇 Manually include pages
    additionalPaths: async (config) => [
      { loc: '/skills', changefreq: 'monthly', priority: 0.8 },
      { loc: '/projects', changefreq: 'weekly', priority: 0.5 },
    ],
  };
  