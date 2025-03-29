import { NextResponse } from 'next/server';

export async function GET() {
  const urls = [
    {
      loc: 'https://emiedonmokumo.vercel.app',
      lastmod: new Date().toISOString(),
      changefreq: 'yearly',
      priority: 1,
    },
    {
      loc: 'https://emiedonmokumo.vercel.app/skills',
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      loc: 'https://emiedonmokumo.vercel.app/projects',
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.5,
    },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
      .map(
        (url) => `
    <url>
      <loc>${url.loc}</loc>
      <lastmod>${url.lastmod}</lastmod>
      <changefreq>${url.changefreq}</changefreq>
      <priority>${url.priority}</priority>
    </url>
  `
      )
      .join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
