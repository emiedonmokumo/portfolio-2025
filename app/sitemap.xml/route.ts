import { NextResponse } from 'next/server';

export const GET = async () => {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

    // Example URLs
    const urls = [
        `${baseUrl}/`,
        `${baseUrl}/skills`,
        `${baseUrl}/projects`
        // `${baseUrl}/contact`,
    ];


    // Generate sitemap XML
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls
            .map(
                (url) => `
        <url>
          <loc>${url}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <priority>0.8</priority>
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
};