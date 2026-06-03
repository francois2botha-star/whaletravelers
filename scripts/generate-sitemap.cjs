#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const baseUrl = 'https://francois2botha-star.github.io/dial-a-driver-hermanus';
const pages = [''];

const urls = pages
  .map((p) => {
    const loc = p ? `${baseUrl}/${p}` : `${baseUrl}/`;
    return `  <url>\n    <loc>${loc}</loc>\n    <changefreq>weekly</changefreq>\n  </url>`;
  })
  .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

const distPath = path.join(__dirname, '..', 'dist', 'sitemap.xml');
fs.writeFileSync(distPath, sitemap, 'utf8');
console.log(`✓ Sitemap generated at ${distPath}`);
