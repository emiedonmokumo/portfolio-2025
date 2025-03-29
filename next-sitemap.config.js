/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://emiedonmokumo.vercel.app', // Change this to your site's domain
    generateRobotsTxt: true, // Generates a robots.txt file
    changefreq: 'weekly', // Default change frequency
    priority: 0.7, // Default priority
    sitemapSize: 5000, // Number of entries per sitemap file
    // exclude: ['/admin', '/dashboard'], // Exclude any private routes
  };
  