/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://emiedonmokumo.vercel.app', // Your site's base URL
  generateRobotsTxt: true, // Generates a robots.txt file
  generateIndexSitemap: true, // Ensures index sitemap is generated
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: [], // Keep empty unless you have private routes to exclude
};
