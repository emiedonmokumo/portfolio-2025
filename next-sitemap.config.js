/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://emiedonmokumo.vercel.app',
    generateRobotsTxt: true,
    sitemapSize: 5000,
    outDir: './public',
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
    },
    
  };
  