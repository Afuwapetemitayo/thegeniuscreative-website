// Everything search engines and link previews (WhatsApp, X, LinkedIn) read.
// Used in two places: the build-time prerender (writes real HTML for each
// page) and the browser (updates the tab title etc. when you navigate).

import projects from './data/projects.js'

// ---------------------------------------------------------------------------
// THE ONE LINE TO CHANGE WHEN YOU BUY A DOMAIN
// Leave it empty and the build uses the site's Vercel production address
// automatically. Once you have a domain, put it here, e.g.
// 'https://thegeniuscreative.com' (no trailing slash).
// ---------------------------------------------------------------------------
const CUSTOM_DOMAIN = ''

export const SITE_URL = (() => {
  if (CUSTOM_DOMAIN) return CUSTOM_DOMAIN.replace(/\/$/, '')
  const env = typeof process !== 'undefined' ? process.env : {}
  if (env.SITE_URL) return env.SITE_URL.replace(/\/$/, '')
  if (env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`
  if (typeof window !== 'undefined') return window.location.origin
  return 'http://localhost:5173'
})()

export const SITE = {
  name: 'Thegeniuscreative',
  person: 'Afuwape Temitayo',
  shortName: 'Temitayo',
  locale: 'en_NG',
  twitter: '@thegeniuscr',
  email: 'workwithafuwapetemitayo@gmail.com',
  image: '/og-image.jpg',
  // ~55-60 characters so Google doesn't cut it off
  title: 'Brand Designer & Web Developer in Lagos | Thegeniuscreative',
  // ~150-160 characters
  description:
    'Afuwape Temitayo (Thegeniuscreative) is a Lagos-based brand identity designer and full-stack web developer helping startups and brands get remembered, trusted and chosen.',
  socials: [
    'https://x.com/thegeniuscr',
    'https://www.instagram.com/thegeniuscreative.ng/',
    'https://www.linkedin.com/in/afuwapetemitayo/',
    'https://www.behance.net/thegeniuscreative',
    'https://github.com/Afuwapetemitayo',
    'https://thegeniuscreative.hashnode.dev'
  ],
  skills: [
    'Brand identity design',
    'Social media design',
    'Frontend development',
    'Full-stack web development',
    'React',
    'Brand strategy'
  ]
}

const abs = (path) => (path?.startsWith('http') ? path : `${SITE_URL}${path || ''}`)

const clip = (text, max = 158) => {
  const t = (text || '').replace(/\s+/g, ' ').trim()
  if (t.length <= max) return t
  return t.slice(0, t.lastIndexOf(' ', max - 1)).replace(/[,;:—-]+$/, '') + '…'
}

const isPlaceholder = (p) => p.name.trim().startsWith('[')
export const realProjects = projects.filter((p) => !isPlaceholder(p))

// Every URL that should be in the sitemap / prerendered.
export const routes = ['/', ...realProjects.map((p) => `/solutions/${p.slug}`)]

// --- Structured data (JSON-LD): tells Google who you are -------------------
const personLd = {
  '@type': 'Person',
  '@id': `${SITE_URL}/#person`,
  name: SITE.person,
  alternateName: ['Temitayo Afuwape', 'Thegeniuscreative', 'Temmytee'],
  url: `${SITE_URL}/`,
  image: abs('/images/temitayo.jpg'),
  jobTitle: 'Brand Designer & Full-Stack Web Developer',
  description: SITE.description,
  email: `mailto:${SITE.email}`,
  address: { '@type': 'PostalAddress', addressLocality: 'Lagos', addressCountry: 'NG' },
  knowsAbout: SITE.skills,
  sameAs: SITE.socials
}

const businessLd = {
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#business`,
  name: SITE.name,
  url: `${SITE_URL}/`,
  image: abs(SITE.image),
  logo: abs('/icon-512.png'),
  description: SITE.description,
  founder: { '@id': `${SITE_URL}/#person` },
  address: { '@type': 'PostalAddress', addressLocality: 'Lagos', addressCountry: 'NG' },
  areaServed: [
    { '@type': 'Country', name: 'Nigeria' },
    { '@type': 'Place', name: 'Africa' },
    { '@type': 'Place', name: 'Worldwide' }
  ],
  serviceType: ['Brand identity design', 'Social media design', 'Website design and development'],
  sameAs: SITE.socials
}

const websiteLd = {
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: SITE.name,
  url: `${SITE_URL}/`,
  publisher: { '@id': `${SITE_URL}/#person` },
  inLanguage: 'en'
}

// --- Per-page head data -----------------------------------------------------
export function headFor(pathname) {
  const path = pathname.replace(/\/+$/, '') || '/'
  const match = path.match(/^\/solutions\/([^/]+)$/)
  const project = match && realProjects.find((p) => p.slug === match[1])

  if (project) {
    const kindLabel =
      project.kind === 'Design' ? 'Brand & Social Media Design' : 'Web Design & Development'
    const url = `${SITE_URL}/solutions/${project.slug}`
    return {
      title: `${project.name} Case Study: ${kindLabel} | ${SITE.name}`,
      description: clip(
        project.problem.toLowerCase().includes(project.name.toLowerCase())
          ? project.problem
          : `${project.name}: ${project.problem}`
      ),
      url,
      image: abs(project.ogImage || project.image || SITE.image),
      imageAlt: `${project.name} — ${kindLabel.toLowerCase()} by ${SITE.name}`,
      type: 'article',
      jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'CreativeWork',
            '@id': `${url}#work`,
            name: `${project.name} — ${kindLabel}`,
            headline: `${project.name}: ${project.result}`,
            description: clip(project.problem, 300),
            url,
            image: abs(project.image || SITE.image),
            creator: { '@id': `${SITE_URL}/#person` },
            about: project.client,
            keywords: [project.kind, ...(project.stack || [])].join(', ')
          },
          {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
              { '@type': 'ListItem', position: 2, name: 'Solutions', item: `${SITE_URL}/#solutions` },
              { '@type': 'ListItem', position: 3, name: project.name, item: url }
            ]
          },
          personLd
        ]
      }
    }
  }

  return {
    title: SITE.title,
    description: SITE.description,
    url: `${SITE_URL}/`,
    image: abs(SITE.image),
    imageAlt: `${SITE.name} — brand design and web development by ${SITE.person}`,
    type: 'website',
    jsonLd: { '@context': 'https://schema.org', '@graph': [websiteLd, personLd, businessLd] }
  }
}

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

// HTML for the <head>, used by the prerender step.
export function headHtml(pathname) {
  const h = headFor(pathname)
  return [
    `<title>${esc(h.title)}</title>`,
    `<meta name="description" content="${esc(h.description)}" />`,
    `<meta name="author" content="${esc(SITE.person)}" />`,
    `<meta name="robots" content="index, follow, max-image-preview:large" />`,
    `<link rel="canonical" href="${esc(h.url)}" />`,
    `<meta property="og:site_name" content="${esc(SITE.name)}" />`,
    `<meta property="og:locale" content="${SITE.locale}" />`,
    `<meta property="og:type" content="${h.type}" />`,
    `<meta property="og:title" content="${esc(h.title)}" />`,
    `<meta property="og:description" content="${esc(h.description)}" />`,
    `<meta property="og:url" content="${esc(h.url)}" />`,
    `<meta property="og:image" content="${esc(h.image)}" />`,
    `<meta property="og:image:alt" content="${esc(h.imageAlt)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:site" content="${SITE.twitter}" />`,
    `<meta name="twitter:creator" content="${SITE.twitter}" />`,
    `<meta name="twitter:title" content="${esc(h.title)}" />`,
    `<meta name="twitter:description" content="${esc(h.description)}" />`,
    `<meta name="twitter:image" content="${esc(h.image)}" />`,
    `<script type="application/ld+json">${JSON.stringify(h.jsonLd).replace(/</g, '\\u003c')}</script>`
  ].join('\n    ')
}
