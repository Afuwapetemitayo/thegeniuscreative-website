import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#craft', label: 'The Craft' },
  { href: '#solutions', label: 'Solutions' },
  { href: '#method', label: 'Brief to Perfection' },
  { href: '#journal', label: 'Journal' }
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const onHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 900) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Section links only make sense on the home page; elsewhere they route back home first.
  const linkHref = (href) => (onHome ? href : `/${href}`)

  return (
    <header className={scrolled ? 'on' : ''}>
      <div className="bar">
        <Link className="logo" to="/">Thegeniuscreative</Link>
        <button
          className="hbtn"
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="mainnav"
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
        <nav id="mainnav" aria-label="Main" className={open ? 'open' : ''}>
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={linkHref(l.href)} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a className="btn" href={linkHref('#build')} onClick={() => setOpen(false)}>
            Let's Create
          </a>
        </nav>
      </div>
    </header>
  )
}
