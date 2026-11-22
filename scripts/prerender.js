// Runs after `vite build`. For every page (home + each case study) it writes
// a real HTML file with the page content and its own title, description,
// share image and structured data already inside — so Google, WhatsApp, X
// and LinkedIn see the actual page instead of an empty <div id="root">.
// It also writes sitemap.xml and robots.txt.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const ssrDir = path.join(root, 'dist-ssr')

const { render, routes, headHtml, SITE_URL } = await import(
  pathToFileURL(path.join(ssrDir, 'entry-server.js')).href
)

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
const headBlock = /<!--app-head-->[\s\S]*?<!--\/app-head-->/

for (const url of routes) {
  const html = template
    .replace(headBlock, headHtml(url))
    .replace('<!--app-html-->', render(url))

  // /solutions/stacko -> dist/solutions/stacko.html (vercel.json cleanUrls serves it without .html)
  const file = url === '/' ? path.join(dist, 'index.html') : path.join(dist, `${url}.html`)
  fs.mkdirSync(path.dirname(file), { recursive: true })
  fs.writeFileSync(file, html)
  console.log(`  prerendered ${url}`)
}

const today = new Date().toISOString().slice(0, 10)
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (u) => `  <url>
    <loc>${SITE_URL}${u}</loc>
    <lastmod>${today}</lastmod>
    <priority>${u === '/' ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap)

fs.writeFileSync(
  path.join(dist, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`
)

fs.rmSync(ssrDir, { recursive: true, force: true })
console.log(`  sitemap.xml + robots.txt written for ${SITE_URL}`)
