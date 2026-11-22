import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { headFor } from '../seo.js'

// Keeps the tab title, description and share tags in sync when someone
// navigates inside the site (the first load already has them baked in by
// the prerender step).
const setMeta = (attr, key, value) => {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', value)
}

export default function Seo() {
  const { pathname } = useLocation()

  useEffect(() => {
    const h = headFor(pathname)
    document.title = h.title
    setMeta('name', 'description', h.description)
    setMeta('property', 'og:title', h.title)
    setMeta('property', 'og:description', h.description)
    setMeta('property', 'og:url', h.url)
    setMeta('property', 'og:image', h.image)
    setMeta('property', 'og:type', h.type)
    setMeta('name', 'twitter:title', h.title)
    setMeta('name', 'twitter:description', h.description)
    setMeta('name', 'twitter:image', h.image)

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = h.url

    let ld = document.head.querySelector('script[type="application/ld+json"]')
    if (!ld) {
      ld = document.createElement('script')
      ld.type = 'application/ld+json'
      document.head.appendChild(ld)
    }
    ld.textContent = JSON.stringify(h.jsonLd)
  }, [pathname])

  return null
}
